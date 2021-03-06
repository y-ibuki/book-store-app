import React, {useState} from 'react'
import cc from 'classcat'

interface IInputProps {
    id: string;
    title: string;
    top?;
    type: string;
}

const Input: React.SFC<IInputProps> = (props) => {
    const [ value, setValue ] = useState('')

    const padding = cc([
        'w-1/2',
        {
            'pb-3': props.top,
            'py-3': props.top === undefined,
        }
    ])

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const getInput = () => {
        let textInput = <input id={props.id} type={props.type} className="bg-gray-200 focus:bg-white border-2 p-1 rounded w-full" value={value} onChange={onChange} />
        if (props.type === 'textarea') textInput = <textarea id={props.id} className="bg-gray-200 focus:bg-white border-2 p-1 rounded w-full" onChange={onChange} />

        return textInput
    }

    return (
        <label className={padding}>
            <span className="block">{props.title}</span>
            { getInput() }
        </label>
    )
}

export default Input;
