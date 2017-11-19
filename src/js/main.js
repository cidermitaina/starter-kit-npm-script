import Sample from './lib/sample';
import $ from 'jquery';

const sample = new Sample({
    name: 'world'
});

$('h1').on('click', () => {
    console.log(`hello, ${sample.name}.`);
});
