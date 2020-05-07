

console.log('我是main.js 2')

getCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onload = () => {
        console.log("成功了")
        // 创建style标签
        const style = document.createElement('style')
        // 填写style内容
        style.innerHTML = request.response
        // 插入HTML中
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log("失败了")
    }
    request.send()
}

getJs.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        //创建script标签
        const script = document.createElement('script')
        //填写script内容
        script.innerHTML = request.response
        //插入HTML里
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('shibaile')
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        //下载完成，但不知道下载的是成功 2xx 的页面 还是失败 4xx 5xx的页面
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建div
                const div = document.createElement('div')
                //填写div内容
                div.innerHTML = request.response
                //插入到HTML里
                document.body.appendChild(div)
            } else {
                alert('加载HTML失败')
            }
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        //下载完成，但不知道下载的是成功 2xx 的页面 还是失败 4xx 5xx的页面
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName("warning")[0].textContent
                console.log(text.trim())
            } else {
                alert('加载XML失败')
            }
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        //下载完成，但不知道下载的是成功 2xx 的页面 还是失败 4xx 5xx的页面
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const object = JSON.parse(request.response)
                myName.textContent = object.name
            } else {
                alert('加载JSON失败')
            }
        }
    }
    request.send()
}
let n = 1

getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n += 1
        }
    }
    request.send()
}