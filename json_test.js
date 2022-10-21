/*직렬화*/
const message = {
    sender: "김코딩",
    receiver: "박해커",
    message: "해커야 오늘 저녁 같이 먹을래?",
    createdAt: "2021-01-12 10:10:10"
}

let transferableMessage = JSON.stringify(message)

console.log(transferableMessage)
// `{"sender":"김코딩","receiver":"박해커","message":"해커야 오늘 저녁 같이 먹을래?","createdAt":"2021-01-12 10:10:10"}`

console.log(typeof (transferableMessage))
//문자열 출력

/*역직렬화*/
let obj = JSON.parse(transferableMessage)

console.log(obj)

console.log(typeof (obj))
