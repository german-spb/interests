var parent = document.querySelectorAll('.interest__check')
parent[0].addEventListener('change', () => {
    if (parent[0].checked == true) {
        parent[1].checked = true
        parent[2].checked = true
    }
    else {
        parent[1].checked = false
        parent[2].checked = false
    }
    
})
parent[3].addEventListener('change', () => {
    if (parent[3].checked == true) {
        parent[4].checked = true
        parent[5].checked = true
    }
    else {
        parent[4].checked = false
        parent[5].checked = false
    }
})

