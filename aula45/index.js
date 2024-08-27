try {
    // É executada quando não há erros
    console.log(a);
    console.log('Abri um arquivo');
    console.log('manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

}catch (e) {
    // é executada quando há erros
    console.log('Tratnado erro');
} finally {
    // é executada sempre
    console.log('FINALLY: Eu sou sempre executado');
}