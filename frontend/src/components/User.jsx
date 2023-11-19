
function User({userData}){

    return(
        <>
            <div>
                <h2>${userData[0]}</h2>
                <h3>${userData[1]}</h3>
            </div>
        </>
    )
}

export default User;