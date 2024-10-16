export default function Singers({ singer }) {
    const { name, age, phoneNumber } = singer

    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
            <h3>Phone Number: {phoneNumber}</h3>
        </div>
    )
}