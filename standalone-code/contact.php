<?php
/**
 * Contact Form Handler for Agudike Uchechukwu Maryrose Portfolio
 * Handles AJAX requests and standard POST form submissions with validation and MySQL persistence.
 */

// Enable strict error reporting during development; in production disable display_errors
error_reporting(E_ALL);
ini_set('display_errors', '0');

header('Content-Type: application/json; charset=utf-8');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'status' => 'error',
        'message' => 'Method Not Allowed. Please submit the contact form via POST.'
    ]);
    exit;
}

// Support JSON input as well as standard form-urlencoded POST
$inputData = [];
$rawInput = file_get_contents('php://input');
if (!empty($rawInput)) {
    $decoded = json_decode($rawInput, true);
    if (is_array($decoded)) {
        $inputData = $decoded;
    }
}
if (empty($inputData)) {
    $inputData = $_POST;
}

// Extract and sanitize inputs
$name    = isset($inputData['name']) ? trim(strip_tags($inputData['name'])) : '';
$email   = isset($inputData['email']) ? trim(filter_var($inputData['email'], FILTER_SANITIZE_EMAIL)) : '';
$subject = isset($inputData['subject']) ? trim(strip_tags($inputData['subject'])) : '';
$message = isset($inputData['message']) ? trim(strip_tags($inputData['message'])) : '';

// Validation checks
$errors = [];

if (empty($name) || strlen($name) < 2) {
    $errors[] = 'Please enter your valid full name.';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please provide a valid email address.';
}

if (empty($subject) || strlen($subject) < 3) {
    $errors[] = 'Please enter an enquiry subject.';
}

if (empty($message) || strlen($message) < 5) {
    $errors[] = 'Please enter your message (at least 5 characters).';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => implode(' ', $errors),
        'errors' => $errors
    ]);
    exit;
}

// -------------------------------------------------------------
// Database Persistence (Optional MySQL Configuration)
// Configure your database connection credentials below
// -------------------------------------------------------------
$dbHost = 'localhost';
$dbUser = 'root';
$dbPass = '';
$dbName = 'maryrose_portfolio';

$dbSaved = false;

try {
    $pdo = new PDO("mysql:host={$dbHost};dbname={$dbName};charset=utf8mb4", $dbUser, $dbPass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_TIMEOUT => 2
    ]);

    $stmt = $pdo->prepare("
        INSERT INTO `contact_inquiries` (`full_name`, `email`, `subject`, `message`, `ip_address`, `status`) 
        VALUES (:full_name, :email, :subject, :message, :ip_address, 'new')
    ");

    $ipAddress = $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN';

    $stmt->execute([
        ':full_name'  => $name,
        ':email'      => $email,
        ':subject'    => $subject,
        ':message'    => $message,
        ':ip_address' => $ipAddress
    ]);

    $dbSaved = true;
} catch (Exception $e) {
    // Database connection is optional; log or continue gracefully
    error_log("Database persistence note: " . $e->getMessage());
}

// -------------------------------------------------------------
// Email Notification to Maryrose
// -------------------------------------------------------------
$toEmail = 'agudikeuchechukwu@gmail.com';
$emailSubject = "Portfolio Enquiry: " . $subject;
$emailBody = "You have received a new message from your portfolio website:\n\n"
           . "Name: {$name}\n"
           . "Email: {$email}\n"
           . "Subject: {$subject}\n\n"
           . "Message:\n{$message}\n\n"
           . "Sent on: " . date('Y-m-d H:i:s') . "\n";

$headers = "From: webmaster@maryrose-portfolio.local\r\n"
         . "Reply-To: {$email}\r\n"
         . "X-Mailer: PHP/" . phpversion();

// Attempt sending email via PHP mail (works on cPanel/configured SMTP)
@mail($toEmail, $emailSubject, $emailBody, $headers);

// Return JSON success
http_response_code(200);
echo json_encode([
    'status' => 'success',
    'message' => 'Thank you, ' . htmlspecialchars($name) . '! Your message has been sent successfully. Agudike Maryrose will respond promptly.',
    'db_persisted' => $dbSaved
]);
exit;
?>
