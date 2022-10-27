import Title from "./Title";

export default {
    title: "Practice/Title",
    component: Title,
    argTypes: {
        title: { control: "text" },
        textColor: { control: "text" }
    }
}

//템플릿을 만들어 줍니다 
//Title zjavhsjsxmrk args를 전달 바아 props로 내려 줍니다.
const Template = (args) => <Title {...args} />

//스토리 북에서 확인하고 싶은 컴포넌트는 export const로 작성합니다.
//템플릿을 사용하여 storybook에 넣어줄 스토리를 하나 만들어 주었습니다.
export const RedTitle = Template.bind({});

//만들어준 스토리의 전달인자를 작성해 줍니다.
RedTitle.args = {
    title: "Red Title",
    textColor: "red"
}

//스토리를 하나더 만들어 줍니다.
export const BlueTitle = Template.bind({});

//스포리의 전달인자를 작성합니다.
BlueTitle.args = {
    title: "Blue Title",
    textColor: "blue"
}