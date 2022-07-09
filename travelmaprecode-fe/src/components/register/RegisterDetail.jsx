import React, {useState} from 'react';

import './RegisterDetail.css'

const RegisterDetail = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    };
    const onSubmit = (event) => {
        event.preventDefault()
        if(password !== confirmPassword) {
            return alert('비밀번호와 비밀번호확인은 같아야 합니다.');
        }
    };


    return (
        <div className="register_detail">
            <form>
                <div>
                    <input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler}/>
                </div>
                <div>
                    <input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler}/>
                </div>
                <div>
                    <input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler}/>
                </div>
                <div>
                    <button type="submit" onSubmit={onSubmit}>계정 생성하기</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterDetail;