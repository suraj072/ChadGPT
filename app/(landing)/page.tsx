import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {ClerkProvider} from '@clerk/nextjs'
const LandingPage=()=>{
    return(
        <div>
            Landing Page(Unprotected)
            <div>
                <Link rel="stylesheet" href="/sign-in" >
                    <Button>Login</Button>
                </Link>
                <Link rel="stylesheet" href="/sign-up" >
                    <Button>Register</Button>
                </Link>
            </div>
        </div>
    );
}
export default LandingPage;