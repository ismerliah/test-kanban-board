import { useLocalStorage } from "@vueuse/core";
import { v4 as uuidv4 } from 'uuid';

const USER = useLocalStorage("user", [])
export { USER };

export function addUser(email, username, password) {
    USER.value.push({
        userId: uuidv4(),
        email,
        username,
        password,
    });
}
