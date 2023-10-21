import { useAtom } from "jotai";
import {uppercaseAtom} from "../stores/atoms";


export const Uppercase = () => {
    const [uppercase] = useAtom(uppercaseAtom)
    return (
        <div>
            <p>
            Uppercase: {uppercase}
            </p>
        </div>
    )
}