import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { insert, deleteData, update } from "./Action";


const CrudComponent = () => {
    const [userData, setUserData] = useState({
        id: "",
        name: "",
        age: ""
    });
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();
    const change = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }
    const savedata = (e) => {
        e.preventDefault();
        let len = data.length
        userData.id = len + 1;
        dispatch(insert(userData))
        setUserData({
            id: "",
            name: "",
            age: ""
        })
    }
    const editData = (data) => {
        setUserData(data);
    };
    const updateData = (e) => {
        e.preventDefault();
        dispatch(update(userData.id, userData))
        setUserData({
            id: "",
            name: "",
            age: ""
        })
    };
    return (
        <>
            <form action="#" method="post" onSubmit={userData.id !== '' ? updateData : savedata}>
                Name:<input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={change}
                    placeholder="Enter Name" />
                Age:<input
                    type="text"
                    name="age"
                    value={userData.age}
                    onChange={change}
                    placeholder="Enter Age" />
                <input type="submit" value={userData.id != '' ? 'Update Data' : 'Save Data'} />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((i) => (
                        <tr key={i.id}>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td><button onClick={() => editData(i)}>Edit</button></td>
                            <td><button onClick={() => dispatch(deleteData(i.id))}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
}

export default CrudComponent;