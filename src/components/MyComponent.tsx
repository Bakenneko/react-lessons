import {FC} from "react";

type MyComponentPropType = {text: string};


const MyComponent: FC<MyComponentPropType> = ({text}) => {
    return (
        <div>
            {text}
        </div>
    );
};

export default MyComponent;


/*
rsc шаблон коду.
import {FC} from "react";

type MyComponentPropType = {text:string}

const MyComponent: FC<MyComponentPropType> = ({text} ) => {
    return <div>{text}</div>
}

export default MyComponent;*/
