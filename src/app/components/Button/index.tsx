

type Props = {
    label: string;
    onClick: ()=> void;
}

export const Button = ({ label, onClick }: Props) => {

    return (
        <div className="w-full flex justify-center items-center">
            <button onClick={onClick} className="p-3 bg-blue-700 text-white rounded-md">{label}</button>
        </div>
    )
} 