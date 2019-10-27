function sort(method){
<<<<<<< HEAD
    let origin = document.getElementById('origin').value
    let logs
    console.log(method)
    if(method=='bubble'){
        logs = bubbleSort(origin)
    }else if(method=='insert'){
        logs =insertSort(origin)
    }
    showDiv = document.getElementById('Anim')
    logValues =logs.values()
    console.log(logValues.next())
    setTimeout("showLog(logValues,showDiv)",50)
}
=======
        let origin = document.getElementById('origin').value
        let logs
        console.log(method)
        if(method=='bubble'){
            logs = bubbleSort(origin)
        }else if(method=='insert'){
            logs = insertSort(origin)
        }
        showDiv = document.getElementById('Anim')
    logValues = logs.values()
    console.log(logValues.next())
    setTimeout("showLog(logValues,showDiv)",50)
    }
>>>>>>> 6e7da63b9bd104c457a8d6445c01af696f0f1982
    
    