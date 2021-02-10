function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Los gatos dominaran al mundo');
    await sleep(1000);
  }
}

main();
