function drawchart(width = 200, height = 400){
    console.log(`${width} X ${height} 차트를 그립니다.`);
}

drawchart(100);
drawchart();

function drawchart2(width = 200, height = width / 2){
    console.log(`${width} X ${height} 차트를 그립니다`);
}

drawchart2(300);
drawchart2();

/**
 * 함수 매개변수 디폴트 값 지정.
 */