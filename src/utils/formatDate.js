export const formatDate=(date)=>{
    const dateSplit=date.split("/")
    const formatDate=`${dateSplit[2]}-${dateSplit[0]}-${dateSplit[1]}`
    return formatDate
}