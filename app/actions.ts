export const getUser = async (userId: string) => {
    const res = await fetch(`http://localhost:3000/api/user?userId=${userId}`)

    if (!res.ok){
        throw new Error('Ошибка при выполнении запроса');
    }

    return res.json()

}