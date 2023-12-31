import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Tailwind,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  type MessageUsEmailProps = {
    name: string;
    email: string;
    message: string;
    phone: string;
    country: string; 
    company: string;
  };
  
  const MessageUsEmail = ({ name, email, message, phone, country, company }: MessageUsEmailProps) => {
    const previewText = `Portfolio Updates ! ${name} sent you a message.`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className='bg-white my-auto mx-auto font-sans'>
            <Container className='my-[20px] mx-auto p-[20px] max-w-4xl'>
              <Heading className='text-black text-[20px] font-normal text-left'>
                <strong>Name: {name},</strong>
                <strong>Email: {email},</strong>
                <strong>Country: {country},</strong>
                <strong>Company: {company},</strong>
                <strong>Phone: {phone},</strong>
              </Heading>
              <Hr className='my-[16px] mx-0 w-full' />
              <Text className='text-black text-[14px] leading-[24px]'>
                {message}
              </Text>
  
          
    
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default MessageUsEmail;


// import * as React from 'react';

// interface EmailTemplateProps {
//   firstName: string;
// }

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//   firstName,
// }) => (
//   <div>
//     <h1>Welcome, {firstName}!</h1>
//   </div>
// );