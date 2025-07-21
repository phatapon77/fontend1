export default function LoginPage(){ return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Page</title>
  <style dangerouslySetInnerHTML={{__html: "\n    * {\n      box-sizing: border-box;\n      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    }\n\n    body {\n      margin: 0;\n      background: linear-gradient(135deg, #6B73FF, #000DFF);\n      height: 100vh;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .login-container {\n      background-color: white;\n      padding: 40px;\n      border-radius: 12px;\n      box-shadow: 0 10px 20px rgba(0,0,0,0.2);\n      width: 100%;\n      max-width: 400px;\n    }\n\n    .login-container h2 {\n      margin-bottom: 24px;\n      text-align: center;\n      color: #333;\n    }\n\n    .login-container input[type=\"text\"],\n    .login-container input[type=\"password\"] {\n      width: 100%;\n      padding: 12px 15px;\n      margin-bottom: 20px;\n      border: 1px solid #ccc;\n      border-radius: 6px;\n      font-size: 16px;\n    }\n\n    .login-container button {\n      width: 100%;\n      padding: 12px;\n      background-color: #4A5CFF;\n      color: white;\n      border: none;\n      border-radius: 6px;\n      font-size: 16px;\n      cursor: pointer;\n      transition: background-color 0.3s ease;\n    }\n\n    .login-container button:hover {\n      background-color: #3742fa;\n    }\n\n    .login-container .footer {\n      margin-top: 15px;\n      text-align: center;\n      font-size: 14px;\n      color: #666;\n    }\n  " }} />
  <div className="login-container">
    <h2>Login</h2>
    <input type="text" id="username" placeholder="Username" />
    <input type="password" id="password" placeholder="Password" />
    <button onclick="login()">Login</button>
    <div className="footer">Don't have an account? <a href="#">Sign up</a></div>
  </div>
</div>

)
}