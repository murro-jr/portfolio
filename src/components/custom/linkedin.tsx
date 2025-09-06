import * as React from "react"
import { Button } from "../ui/button"
import { Linkedin } from "lucide-react"

const LinkedinReach = () => {
    const url = 'https://www.linkedin.com/in/rexes-murro/';
    const openLinkedin = () => window.open(url, '_blank');
    return (
        <Button className="flex items-center gap-2" onClick={openLinkedin}>
            <Linkedin className="w-4 h-4" />
            Linkedin
        </Button>
    );
};
LinkedinReach.displayName = "LinkedinReach"
export { LinkedinReach }
