import * as React from "react"
import { Button } from "../ui/button"
import { MailPlus } from "lucide-react"
import './sendEmail.css';

const SendEmail = () => {
    const recipient = 'jrmurro@gmail.com';
    const subject = 'Hello, John';
    const body = 'Just wanted to say hi!';
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const openGMail = () => window.open(gmailURL, '_blank');
    const openDefaultMail = () => window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    return (
        <>
            <Button variant={'secondary'} className="gmail" onClick={openGMail}>
                <MailPlus className="w-4 h-4" />
                Send an Email
            </Button>
            <Button variant={'secondary'} className="default-email" onClick={openDefaultMail}>
                <MailPlus className="w-4 h-4" />
                Send an Email
            </Button>
        </>
    );
};
SendEmail.displayName = "SendEmail"
export { SendEmail }
