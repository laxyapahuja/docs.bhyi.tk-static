let color = '#000000'
let data = []
let table = document.getElementsByTagName('table')[0]
let innerTableData = ''

if (window.location.href.endsWith('funnywords.html')) {
    data = funny
    color = '#41F2B1'
} else if (window.location.href.endsWith('abusing.html')) {
    data = abusing
    color = '#E825AF'
} else if (window.location.href.endsWith('talking.html')) {
    data = talking
    color = '#DCF53C'
}


for (let i = 0; i < data.length; i += 5) {
    innerTableData = innerTableData + `<tr><td style="color: ${color};" title="${data[i].eng}"><span id='a'> ${data[i].word}</span><span id='b'>${data[i].meaning}</span></td><td style="color: ${color};" title="${data[i+1].eng}"><span id='a'> ${data[i+1].word}</span><span id='b'>${data[i+1].meaning}</span></td><td style="color: ${color};" title="${data[i+2].eng}"><span id='a'> ${data[i+2].word}</span><span id='b'>${data[i+2].meaning}</span></td><td style="color: ${color};" title="${data[i+3].eng}"><span id='a'> ${data[i+3].word}</span><span id='b'>${data[i+3].meaning}</span></td><td style="color: ${color};" title="${data[i+4].eng}"><span id='a'> ${data[i+4].word}</span><span id='b'>${data[i+4].meaning}</span></td></tr>`.toString();
}

table.innerHTML = innerTableData;