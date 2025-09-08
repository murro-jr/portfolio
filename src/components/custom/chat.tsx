import * as React from "react"
import { DeepChat } from "deep-chat-react";
import './chat.css';
import { MessageSquareIcon } from "lucide-react";
import { Button } from "../ui/button";

const ChatWithAI = () => {
    const [showChat, setShowChat] = React.useState(false);
    return (
        <div className='chat'>
            {showChat &&
                <DeepChat
                    introMessage={{ text: 'Hi! I am Rexes. How can I help you?' }}
                    connect={{
                        url: "https://api.rexes.cloud/api/chat",
                        method: "POST",
                    }} />}
            <Button variant={'outline'} size={'lg'} onClick={() => setShowChat(!showChat)}>
                <MessageSquareIcon width={40} height={40} onClick={() => setShowChat(!showChat)} />
                Chat
            </Button>
        </div>
    );
};
ChatWithAI.displayName = "ChatWithAI"
export { ChatWithAI }