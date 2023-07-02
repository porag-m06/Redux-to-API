import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/users/usersSlice';

const UsersList = () => {
    const { users, isLoading, error } = useSelector(
        storeState => storeState.users
    );
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers());
    }, [dispatch, fetchUsers]);

        
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>Div for user loaded:  
            <ul>
                {users.map(user =>(
                    <li key={user.id}>
                        {user.name.first} {user.name.last}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UsersList