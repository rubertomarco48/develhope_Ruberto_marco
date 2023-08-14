import { useForm } from "./useForm"

export function Form() {
    const {username,password,changeUsername,changePassword}=useForm(null);

    return(
    <>
    <form>
        <label>USERNAME</label>
        <input type="text" name="username" value={username} onChange={changeUsername} />
        <label>PASSWORD</label>
        <input type="password" name="password" value={password} onChange={changePassword} />
    </form>
    </>
    )
}