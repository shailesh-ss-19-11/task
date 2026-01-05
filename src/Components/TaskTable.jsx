
const TaskTable = ({ data,handleUpdate }) => {
    return (

        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Desc</th>
                        <th>status</th>
                        <th>priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((task) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.desc}</td>
                            <td>{task.status}</td>
                            <td>{task.priority}</td>
                            <td>
                                <button onClick={() => handleUpdate(task.id)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TaskTable