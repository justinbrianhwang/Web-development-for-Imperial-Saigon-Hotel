// 임시로 인증 코드를 저장하는 변수 (실제 구현에서는 DB에 저장해야 함)
let savedVerificationCode = null;

// 이메일 전송 시 인증 코드 저장
app.post('/signup', (req, res) => {
    const { email, username } = req.body;
    savedVerificationCode = Math.floor(100000 + Math.random() * 900000);

    // 이메일 전송 로직 (위의 Nodemailer 코드와 동일)
    // 이메일 발송 후 인증 코드 저장
});

// 인증 코드 확인
app.post('/verify', (req, res) => {
    const { verificationCode } = req.body;

    // 인증 코드가 맞으면 회원가입 완료 처리
    if (parseInt(verificationCode) === savedVerificationCode) {
        res.send('회원가입이 완료되었습니다.');
    } else {
        res.status(400).send('잘못된 인증 코드입니다.');
    }
});
