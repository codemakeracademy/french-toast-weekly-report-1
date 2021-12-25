export const getJoinDate = (joinDate) => {
    const date = new Date(joinDate)
    const month = date.toLocaleString('en-us', { month: 'long' });
    return `Joined ${month} ${date.getFullYear()}`
}

export const getMemberInitials = (member) => {
    return member.firstName.charAt(0) + member.lastName.charAt(0)
}
export const getMembersFullName = (member) => {
   return  member.firstName + " " + member.lastName
}
export const getMembersName = (member)=> {
    return member.firstName
}

// export const baseUrl = 'http://localhost:3000';
export const baseUrl = 'https://weekly-report-01.digitalocean.ankocorp.com';