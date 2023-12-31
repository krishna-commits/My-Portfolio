import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  phone: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,email, message, phone
}) => (
  <div>
    <h1>Message from {name}!</h1>
    <div>
    <span>
      <strong>Email : {email}</strong>
    </span>
    </div>
    <div>
    <span>
      <strong>Phone : {phone}</strong>
    </span>
      </div>
    <hr></hr>
    <p>
      {message}
    </p>


    
  </div>
);