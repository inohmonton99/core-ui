export let stream0 = {
  parameters: [],
  uid: "0985ecaf-acb3-4fd1-b390-743c8b9e9457",
  name: "dag-diamond-coinflip-7x4pb",
  status:
    '{"phase":"Succeeded","startedAt":"2019-12-21T02:42:41Z","finishedAt":"2019-12-21T02:44:23Z","nodes":{"dag-diamond-coinflip-7x4pb":{"id":"dag-diamond-coinflip-7x4pb","name":"dag-diamond-coinflip-7x4pb","displayName":"dag-diamond-coinflip-7x4pb","type":"DAG","templateName":"diamond","storedTemplateID":"/diamond","phase":"Succeeded","startedAt":"2019-12-21T02:42:41Z","finishedAt":"2019-12-21T02:44:23Z","children":["dag-diamond-coinflip-7x4pb-105990128"],"outboundNodes":["dag-diamond-coinflip-7x4pb-2959831443","dag-diamond-coinflip-7x4pb-3683258255","dag-diamond-coinflip-7x4pb-3053213907","dag-diamond-coinflip-7x4pb-1465577795"]},"dag-diamond-coinflip-7x4pb-105990128":{"id":"dag-diamond-coinflip-7x4pb-105990128","name":"dag-diamond-coinflip-7x4pb.A","displayName":"A","type":"Steps","templateName":"coinflip","storedTemplateID":"/coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb","startedAt":"2019-12-21T02:42:41Z","finishedAt":"2019-12-21T02:43:11Z","children":["dag-diamond-coinflip-7x4pb-2534930762"],"outboundNodes":["dag-diamond-coinflip-7x4pb-1434153222","dag-diamond-coinflip-7x4pb-3942544988","dag-diamond-coinflip-7x4pb-423782572"]},"dag-diamond-coinflip-7x4pb-1273913174":{"id":"dag-diamond-coinflip-7x4pb-1273913174","name":"dag-diamond-coinflip-7x4pb.A[1].tails","displayName":"tails","type":"Steps","templateName":"coinflip","storedTemplateID":"/coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-105990128","startedAt":"2019-12-21T02:42:55Z","finishedAt":"2019-12-21T02:43:11Z","children":["dag-diamond-coinflip-7x4pb-696431944"],"outboundNodes":["dag-diamond-coinflip-7x4pb-3942544988","dag-diamond-coinflip-7x4pb-423782572"]},"dag-diamond-coinflip-7x4pb-1276788573":{"id":"dag-diamond-coinflip-7x4pb-1276788573","name":"dag-diamond-coinflip-7x4pb.B[1].heads","displayName":"heads","type":"Skipped","templateName":"heads","phase":"Skipped","boundaryID":"dag-diamond-coinflip-7x4pb-156322985","message":"when \'tails == heads\' evaluated false","startedAt":"2019-12-21T02:43:32Z","finishedAt":"2019-12-21T02:43:32Z","children":["dag-diamond-coinflip-7x4pb-189878223"]},"dag-diamond-coinflip-7x4pb-1372298499":{"id":"dag-diamond-coinflip-7x4pb-1372298499","name":"dag-diamond-coinflip-7x4pb.D[1].tails","displayName":"tails","type":"Steps","templateName":"coinflip","storedTemplateID":"/coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-189878223","startedAt":"2019-12-21T02:44:04Z","finishedAt":"2019-12-21T02:44:23Z","children":["dag-diamond-coinflip-7x4pb-1882394031"],"outboundNodes":["dag-diamond-coinflip-7x4pb-3683258255","dag-diamond-coinflip-7x4pb-3053213907","dag-diamond-coinflip-7x4pb-1465577795"]},"dag-diamond-coinflip-7x4pb-139545366":{"id":"dag-diamond-coinflip-7x4pb-139545366","name":"dag-diamond-coinflip-7x4pb.C","displayName":"C","type":"Steps","templateName":"coinflip","storedTemplateID":"/coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb","startedAt":"2019-12-21T02:43:11Z","finishedAt":"2019-12-21T02:43:43Z","children":["dag-diamond-coinflip-7x4pb-3341776264"],"outboundNodes":["dag-diamond-coinflip-7x4pb-2768751900","dag-diamond-coinflip-7x4pb-4010990956"]},"dag-diamond-coinflip-7x4pb-1434153222":{"id":"dag-diamond-coinflip-7x4pb-1434153222","name":"dag-diamond-coinflip-7x4pb.A[1].heads","displayName":"heads","type":"Skipped","templateName":"heads","phase":"Skipped","boundaryID":"dag-diamond-coinflip-7x4pb-105990128","message":"when \'tails == heads\' evaluated false","startedAt":"2019-12-21T02:42:55Z","finishedAt":"2019-12-21T02:42:55Z","children":["dag-diamond-coinflip-7x4pb-139545366","dag-diamond-coinflip-7x4pb-156322985"]},"dag-diamond-coinflip-7x4pb-1465577795":{"id":"dag-diamond-coinflip-7x4pb-1465577795","name":"dag-diamond-coinflip-7x4pb.D[1].tails[1].tails[1].tails","displayName":"tails","type":"Skipped","templateName":"coinflip","phase":"Skipped","boundaryID":"dag-diamond-coinflip-7x4pb-2624233231","message":"when \'heads == tails\' evaluated false","startedAt":"2019-12-21T02:44:18Z","finishedAt":"2019-12-21T02:44:18Z"},"dag-diamond-coinflip-7x4pb-156322985":{"id":"dag-diamond-coinflip-7x4pb-156322985","name":"dag-diamond-coinflip-7x4pb.B","displayName":"B","type":"Steps","templateName":"coinflip","storedTemplateID":"/coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb","startedAt":"2019-12-21T02:43:12Z","finishedAt":"2019-12-21T02:43:56Z","children":["dag-diamond-coinflip-7x4pb-1838427453"],"outboundNodes":["dag-diamond-coinflip-7x4pb-1276788573","dag-diamond-coinflip-7x4pb-1737718273","dag-diamond-coinflip-7x4pb-902364025"]},"dag-diamond-coinflip-7x4pb-1722931092":{"id":"dag-diamond-coinflip-7x4pb-1722931092","name":"dag-diamond-coinflip-7x4pb.B[1].tails[1]","displayName":"[1]","type":"StepGroup","templateName":"coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-2375975925","startedAt":"2019-12-21T02:43:50Z","finishedAt":"2019-12-21T02:43:56Z","children":["dag-diamond-coinflip-7x4pb-1737718273","dag-diamond-coinflip-7x4pb-902364025"]},"dag-diamond-coinflip-7x4pb-1737718273":{"id":"dag-diamond-coinflip-7x4pb-1737718273","name":"dag-diamond-coinflip-7x4pb.B[1].tails[1].heads","displayName":"heads","type":"Pod","templateName":"heads","storedTemplateID":"/heads","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-2375975925","startedAt":"2019-12-21T02:43:50Z","finishedAt":"2019-12-21T02:43:55Z","children":["dag-diamond-coinflip-7x4pb-189878223"]},"dag-diamond-coinflip-7x4pb-1837162941":{"id":"dag-diamond-coinflip-7x4pb-1837162941","name":"dag-diamond-coinflip-7x4pb.A[1].tails[1]","displayName":"[1]","type":"StepGroup","templateName":"coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-1273913174","startedAt":"2019-12-21T02:43:05Z","finishedAt":"2019-12-21T02:43:11Z","children":["dag-diamond-coinflip-7x4pb-3942544988","dag-diamond-coinflip-7x4pb-423782572"]},"dag-diamond-coinflip-7x4pb-1838427453":{"id":"dag-diamond-coinflip-7x4pb-1838427453","name":"dag-diamond-coinflip-7x4pb.B[0]","displayName":"[0]","type":"StepGroup","templateName":"coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-156322985","startedAt":"2019-12-21T02:43:12Z","finishedAt":"2019-12-21T02:43:32Z","children":["dag-diamond-coinflip-7x4pb-2036475372"]},"dag-diamond-coinflip-7x4pb-187436797":{"id":"dag-diamond-coinflip-7x4pb-187436797","name":"dag-diamond-coinflip-7x4pb.C[1]","displayName":"[1]","type":"StepGroup","templateName":"coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-139545366","startedAt":"2019-12-21T02:43:29Z","finishedAt":"2019-12-21T02:43:43Z","children":["dag-diamond-coinflip-7x4pb-2768751900","dag-diamond-coinflip-7x4pb-4010990956"]},"dag-diamond-coinflip-7x4pb-1882394031":{"id":"dag-diamond-coinflip-7x4pb-1882394031","name":"dag-diamond-coinflip-7x4pb.D[1].tails[0]","displayName":"[0]","type":"StepGroup","templateName":"coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-1372298499","startedAt":"2019-12-21T02:44:04Z","finishedAt":"2019-12-21T02:44:10Z","children":["dag-diamond-coinflip-7x4pb-3270113098"]},"dag-diamond-coinflip-7x4pb-189878223":{"id":"dag-diamond-coinflip-7x4pb-189878223","name":"dag-diamond-coinflip-7x4pb.D","displayName":"D","type":"Steps","templateName":"coinflip","storedTemplateID":"/coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb","startedAt":"2019-12-21T02:43:57Z","finishedAt":"2019-12-21T02:44:23Z","children":["dag-diamond-coinflip-7x4pb-3069730427"],"outboundNodes":["dag-diamond-coinflip-7x4pb-2959831443","dag-diamond-coinflip-7x4pb-3683258255","dag-diamond-coinflip-7x4pb-3053213907","dag-diamond-coinflip-7x4pb-1465577795"]},"dag-diamond-coinflip-7x4pb-1949651602":{"id":"dag-diamond-coinflip-7x4pb-1949651602","name":"dag-diamond-coinflip-7x4pb.D[1].tails[1]","displayName":"[1]","type":"StepGroup","templateName":"coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-1372298499","startedAt":"2019-12-21T02:44:10Z","finishedAt":"2019-12-21T02:44:23Z","children":["dag-diamond-coinflip-7x4pb-3683258255","dag-diamond-coinflip-7x4pb-2624233231"]},"dag-diamond-coinflip-7x4pb-2036475372":{"id":"dag-diamond-coinflip-7x4pb-2036475372","name":"dag-diamond-coinflip-7x4pb.B[0].flip-coin","displayName":"flip-coin","type":"Pod","templateName":"flip-coin","storedTemplateID":"/flip-coin","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-156322985","startedAt":"2019-12-21T02:43:12Z","finishedAt":"2019-12-21T02:43:28Z","outputs":{"result":"tails"},"children":["dag-diamond-coinflip-7x4pb-697696456"]},"dag-diamond-coinflip-7x4pb-2230240424":{"id":"dag-diamond-coinflip-7x4pb-2230240424","name":"dag-diamond-coinflip-7x4pb.B[1].tails[0].flip-coin","displayName":"flip-coin","type":"Pod","templateName":"flip-coin","storedTemplateID":"/flip-coin","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-2375975925","startedAt":"2019-12-21T02:43:32Z","finishedAt":"2019-12-21T02:43:49Z","outputs":{"result":"heads"},"children":["dag-diamond-coinflip-7x4pb-1722931092"]},"dag-diamond-coinflip-7x4pb-2375975925":{"id":"dag-diamond-coinflip-7x4pb-2375975925","name":"dag-diamond-coinflip-7x4pb.B[1].tails","displayName":"tails","type":"Steps","templateName":"coinflip","storedTemplateID":"/coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-156322985","startedAt":"2019-12-21T02:43:32Z","finishedAt":"2019-12-21T02:43:56Z","children":["dag-diamond-coinflip-7x4pb-2863662089"],"outboundNodes":["dag-diamond-coinflip-7x4pb-1737718273","dag-diamond-coinflip-7x4pb-902364025"]},"dag-diamond-coinflip-7x4pb-2460299835":{"id":"dag-diamond-coinflip-7x4pb-2460299835","name":"dag-diamond-coinflip-7x4pb.D[1].tails[1].tails[0]","displayName":"[0]","type":"StepGroup","templateName":"coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-2624233231","startedAt":"2019-12-21T02:44:10Z","finishedAt":"2019-12-21T02:44:18Z","children":["dag-diamond-coinflip-7x4pb-3387748406"]},"dag-diamond-coinflip-7x4pb-2467673191":{"id":"dag-diamond-coinflip-7x4pb-2467673191","name":"dag-diamond-coinflip-7x4pb.A[1]","displayName":"[1]","type":"StepGroup","templateName":"coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-105990128","startedAt":"2019-12-21T02:42:55Z","finishedAt":"2019-12-21T02:43:11Z","children":["dag-diamond-coinflip-7x4pb-1434153222","dag-diamond-coinflip-7x4pb-1273913174"]},"dag-diamond-coinflip-7x4pb-2527557406":{"id":"dag-diamond-coinflip-7x4pb-2527557406","name":"dag-diamond-coinflip-7x4pb.D[1].tails[1].tails[1]","displayName":"[1]","type":"StepGroup","templateName":"coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-2624233231","startedAt":"2019-12-21T02:44:18Z","finishedAt":"2019-12-21T02:44:23Z","children":["dag-diamond-coinflip-7x4pb-3053213907","dag-diamond-coinflip-7x4pb-1465577795"]},"dag-diamond-coinflip-7x4pb-2534930762":{"id":"dag-diamond-coinflip-7x4pb-2534930762","name":"dag-diamond-coinflip-7x4pb.A[0]","displayName":"[0]","type":"StepGroup","templateName":"coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-105990128","startedAt":"2019-12-21T02:42:41Z","finishedAt":"2019-12-21T02:42:55Z","children":["dag-diamond-coinflip-7x4pb-4063749495"]},"dag-diamond-coinflip-7x4pb-2624233231":{"id":"dag-diamond-coinflip-7x4pb-2624233231","name":"dag-diamond-coinflip-7x4pb.D[1].tails[1].tails","displayName":"tails","type":"Steps","templateName":"coinflip","storedTemplateID":"/coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-1372298499","startedAt":"2019-12-21T02:44:10Z","finishedAt":"2019-12-21T02:44:23Z","children":["dag-diamond-coinflip-7x4pb-2460299835"],"outboundNodes":["dag-diamond-coinflip-7x4pb-3053213907","dag-diamond-coinflip-7x4pb-1465577795"]},"dag-diamond-coinflip-7x4pb-2643078001":{"id":"dag-diamond-coinflip-7x4pb-2643078001","name":"dag-diamond-coinflip-7x4pb.C[0].flip-coin","displayName":"flip-coin","type":"Pod","templateName":"flip-coin","storedTemplateID":"/flip-coin","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-139545366","startedAt":"2019-12-21T02:43:11Z","finishedAt":"2019-12-21T02:43:26Z","outputs":{"result":"heads"},"children":["dag-diamond-coinflip-7x4pb-187436797"]},"dag-diamond-coinflip-7x4pb-2764406646":{"id":"dag-diamond-coinflip-7x4pb-2764406646","name":"dag-diamond-coinflip-7x4pb.D[0].flip-coin","displayName":"flip-coin","type":"Pod","templateName":"flip-coin","storedTemplateID":"/flip-coin","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-189878223","startedAt":"2019-12-21T02:43:57Z","finishedAt":"2019-12-21T02:44:03Z","outputs":{"result":"tails"},"children":["dag-diamond-coinflip-7x4pb-3136987998"]},"dag-diamond-coinflip-7x4pb-2768751900":{"id":"dag-diamond-coinflip-7x4pb-2768751900","name":"dag-diamond-coinflip-7x4pb.C[1].heads","displayName":"heads","type":"Pod","templateName":"heads","storedTemplateID":"/heads","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-139545366","startedAt":"2019-12-21T02:43:29Z","finishedAt":"2019-12-21T02:43:40Z","children":["dag-diamond-coinflip-7x4pb-189878223"]},"dag-diamond-coinflip-7x4pb-2863662089":{"id":"dag-diamond-coinflip-7x4pb-2863662089","name":"dag-diamond-coinflip-7x4pb.B[1].tails[0]","displayName":"[0]","type":"StepGroup","templateName":"coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-2375975925","startedAt":"2019-12-21T02:43:32Z","finishedAt":"2019-12-21T02:43:50Z","children":["dag-diamond-coinflip-7x4pb-2230240424"]},"dag-diamond-coinflip-7x4pb-2959831443":{"id":"dag-diamond-coinflip-7x4pb-2959831443","name":"dag-diamond-coinflip-7x4pb.D[1].heads","displayName":"heads","type":"Skipped","templateName":"heads","phase":"Skipped","boundaryID":"dag-diamond-coinflip-7x4pb-189878223","message":"when \'tails == heads\' evaluated false","startedAt":"2019-12-21T02:44:04Z","finishedAt":"2019-12-21T02:44:04Z"},"dag-diamond-coinflip-7x4pb-3053213907":{"id":"dag-diamond-coinflip-7x4pb-3053213907","name":"dag-diamond-coinflip-7x4pb.D[1].tails[1].tails[1].heads","displayName":"heads","type":"Pod","templateName":"heads","storedTemplateID":"/heads","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-2624233231","startedAt":"2019-12-21T02:44:18Z","finishedAt":"2019-12-21T02:44:23Z"},"dag-diamond-coinflip-7x4pb-3069730427":{"id":"dag-diamond-coinflip-7x4pb-3069730427","name":"dag-diamond-coinflip-7x4pb.D[0]","displayName":"[0]","type":"StepGroup","templateName":"coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-189878223","startedAt":"2019-12-21T02:43:57Z","finishedAt":"2019-12-21T02:44:04Z","children":["dag-diamond-coinflip-7x4pb-2764406646"]},"dag-diamond-coinflip-7x4pb-3136987998":{"id":"dag-diamond-coinflip-7x4pb-3136987998","name":"dag-diamond-coinflip-7x4pb.D[1]","displayName":"[1]","type":"StepGroup","templateName":"coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-189878223","startedAt":"2019-12-21T02:44:04Z","finishedAt":"2019-12-21T02:44:23Z","children":["dag-diamond-coinflip-7x4pb-2959831443","dag-diamond-coinflip-7x4pb-1372298499"]},"dag-diamond-coinflip-7x4pb-3270113098":{"id":"dag-diamond-coinflip-7x4pb-3270113098","name":"dag-diamond-coinflip-7x4pb.D[1].tails[0].flip-coin","displayName":"flip-coin","type":"Pod","templateName":"flip-coin","storedTemplateID":"/flip-coin","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-1372298499","startedAt":"2019-12-21T02:44:04Z","finishedAt":"2019-12-21T02:44:09Z","outputs":{"result":"tails"},"children":["dag-diamond-coinflip-7x4pb-1949651602"]},"dag-diamond-coinflip-7x4pb-3341776264":{"id":"dag-diamond-coinflip-7x4pb-3341776264","name":"dag-diamond-coinflip-7x4pb.C[0]","displayName":"[0]","type":"StepGroup","templateName":"coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-139545366","startedAt":"2019-12-21T02:43:11Z","finishedAt":"2019-12-21T02:43:29Z","children":["dag-diamond-coinflip-7x4pb-2643078001"]},"dag-diamond-coinflip-7x4pb-3387748406":{"id":"dag-diamond-coinflip-7x4pb-3387748406","name":"dag-diamond-coinflip-7x4pb.D[1].tails[1].tails[0].flip-coin","displayName":"flip-coin","type":"Pod","templateName":"flip-coin","storedTemplateID":"/flip-coin","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-2624233231","startedAt":"2019-12-21T02:44:10Z","finishedAt":"2019-12-21T02:44:16Z","outputs":{"result":"heads"},"children":["dag-diamond-coinflip-7x4pb-2527557406"]},"dag-diamond-coinflip-7x4pb-3615218225":{"id":"dag-diamond-coinflip-7x4pb-3615218225","name":"dag-diamond-coinflip-7x4pb.A[1].tails[0].flip-coin","displayName":"flip-coin","type":"Pod","templateName":"flip-coin","storedTemplateID":"/flip-coin","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-1273913174","startedAt":"2019-12-21T02:42:55Z","finishedAt":"2019-12-21T02:43:04Z","outputs":{"result":"heads"},"children":["dag-diamond-coinflip-7x4pb-1837162941"]},"dag-diamond-coinflip-7x4pb-3683258255":{"id":"dag-diamond-coinflip-7x4pb-3683258255","name":"dag-diamond-coinflip-7x4pb.D[1].tails[1].heads","displayName":"heads","type":"Skipped","templateName":"heads","phase":"Skipped","boundaryID":"dag-diamond-coinflip-7x4pb-1372298499","message":"when \'tails == heads\' evaluated false","startedAt":"2019-12-21T02:44:10Z","finishedAt":"2019-12-21T02:44:10Z"},"dag-diamond-coinflip-7x4pb-3942544988":{"id":"dag-diamond-coinflip-7x4pb-3942544988","name":"dag-diamond-coinflip-7x4pb.A[1].tails[1].heads","displayName":"heads","type":"Pod","templateName":"heads","storedTemplateID":"/heads","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-1273913174","startedAt":"2019-12-21T02:43:05Z","finishedAt":"2019-12-21T02:43:10Z","children":["dag-diamond-coinflip-7x4pb-139545366","dag-diamond-coinflip-7x4pb-156322985"]},"dag-diamond-coinflip-7x4pb-4010990956":{"id":"dag-diamond-coinflip-7x4pb-4010990956","name":"dag-diamond-coinflip-7x4pb.C[1].tails","displayName":"tails","type":"Skipped","templateName":"coinflip","phase":"Skipped","boundaryID":"dag-diamond-coinflip-7x4pb-139545366","message":"when \'heads == tails\' evaluated false","startedAt":"2019-12-21T02:43:30Z","finishedAt":"2019-12-21T02:43:30Z","children":["dag-diamond-coinflip-7x4pb-189878223"]},"dag-diamond-coinflip-7x4pb-4063749495":{"id":"dag-diamond-coinflip-7x4pb-4063749495","name":"dag-diamond-coinflip-7x4pb.A[0].flip-coin","displayName":"flip-coin","type":"Pod","templateName":"flip-coin","storedTemplateID":"/flip-coin","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-105990128","startedAt":"2019-12-21T02:42:41Z","finishedAt":"2019-12-21T02:42:54Z","outputs":{"result":"tails"},"children":["dag-diamond-coinflip-7x4pb-2467673191"]},"dag-diamond-coinflip-7x4pb-423782572":{"id":"dag-diamond-coinflip-7x4pb-423782572","name":"dag-diamond-coinflip-7x4pb.A[1].tails[1].tails","displayName":"tails","type":"Skipped","templateName":"coinflip","phase":"Skipped","boundaryID":"dag-diamond-coinflip-7x4pb-1273913174","message":"when \'heads == tails\' evaluated false","startedAt":"2019-12-21T02:43:05Z","finishedAt":"2019-12-21T02:43:05Z","children":["dag-diamond-coinflip-7x4pb-139545366","dag-diamond-coinflip-7x4pb-156322985"]},"dag-diamond-coinflip-7x4pb-696431944":{"id":"dag-diamond-coinflip-7x4pb-696431944","name":"dag-diamond-coinflip-7x4pb.A[1].tails[0]","displayName":"[0]","type":"StepGroup","templateName":"coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-1273913174","startedAt":"2019-12-21T02:42:55Z","finishedAt":"2019-12-21T02:43:05Z","children":["dag-diamond-coinflip-7x4pb-3615218225"]},"dag-diamond-coinflip-7x4pb-697696456":{"id":"dag-diamond-coinflip-7x4pb-697696456","name":"dag-diamond-coinflip-7x4pb.B[1]","displayName":"[1]","type":"StepGroup","templateName":"coinflip","phase":"Succeeded","boundaryID":"dag-diamond-coinflip-7x4pb-156322985","startedAt":"2019-12-21T02:43:32Z","finishedAt":"2019-12-21T02:43:56Z","children":["dag-diamond-coinflip-7x4pb-1276788573","dag-diamond-coinflip-7x4pb-2375975925"]},"dag-diamond-coinflip-7x4pb-902364025":{"id":"dag-diamond-coinflip-7x4pb-902364025","name":"dag-diamond-coinflip-7x4pb.B[1].tails[1].tails","displayName":"tails","type":"Skipped","templateName":"coinflip","phase":"Skipped","boundaryID":"dag-diamond-coinflip-7x4pb-2375975925","message":"when \'heads == tails\' evaluated false","startedAt":"2019-12-21T02:43:50Z","finishedAt":"2019-12-21T02:43:50Z","children":["dag-diamond-coinflip-7x4pb-189878223"]}},"storedTemplates":{"/coinflip":{"name":"coinflip","arguments":{},"inputs":{},"outputs":{},"metadata":{},"steps":[[{"name":"flip-coin","template":"flip-coin","arguments":{}}],[{"name":"heads","template":"heads","arguments":{},"when":"{{steps.flip-coin.outputs.result}} == heads"},{"name":"tails","template":"coinflip","arguments":{},"when":"{{steps.flip-coin.outputs.result}} == tails"}]]},"/diamond":{"name":"diamond","arguments":{},"inputs":{},"outputs":{},"metadata":{},"dag":{"tasks":[{"name":"A","template":"coinflip","arguments":{}},{"name":"B","template":"coinflip","arguments":{},"dependencies":["A"]},{"name":"C","template":"coinflip","arguments":{},"dependencies":["A"]},{"name":"D","template":"coinflip","arguments":{},"dependencies":["B","C"]}]}},"/flip-coin":{"name":"flip-coin","arguments":{},"inputs":{},"outputs":{},"metadata":{},"script":{"name":"","image":"python:alpine3.6","command":["python"],"resources":{},"source":"import random\\nresult = \\"heads\\" if random.randint(0,1) == 0 else \\"tails\\"\\nprint(result)\\n"}},"/heads":{"name":"heads","arguments":{},"inputs":{},"outputs":{},"metadata":{},"container":{"name":"","image":"alpine:3.6","command":["sh","-c"],"args":["echo \\"it was heads\\""],"resources":{}}}}}',
  workflowTemplate: {
    uid: "00ad76a0-f346-4612-afcb-ee5a0d3544c6",
    name: "DAG Coin Flip",
    version: 1576895973,
    manifest:
      'apiVersion: argoproj.io/v1alpha1\r\nkind: Workflow\r\nmetadata:\r\n  generateName: dag-diamond-coinflip-\r\nspec:\r\n  entrypoint: diamond\r\n  templates:\r\n  - name: diamond\r\n    dag:\r\n      tasks:\r\n      - name: A\r\n        template: coinflip\r\n      - name: B\r\n        dependencies: [A]\r\n        template: coinflip\r\n      - name: C\r\n        dependencies: [A]\r\n        template: coinflip\r\n      - name: D\r\n        dependencies: [B, C]\r\n        template: coinflip\r\n\r\n  - name: coinflip\r\n    steps:\r\n    - - name: flip-coin\r\n        template: flip-coin\r\n    - - name: heads\r\n        template: heads\r\n        when: "{{steps.flip-coin.outputs.result}} == heads"\r\n      - name: tails\r\n        template: coinflip\r\n        when: "{{steps.flip-coin.outputs.result}} == tails"\r\n\r\n  - name: flip-coin\r\n    script:\r\n      image: python:alpine3.6\r\n      command: [python]\r\n      source: |\r\n        import random\r\n        result = "heads" if random.randint(0,1) == 0 else "tails"\r\n        print(result)\r\n  - name: heads\r\n    container:\r\n      image: alpine:3.6\r\n      command: [sh, -c]\r\n      args: ["echo \\"it was heads\\""]'
  }
};

export let stream1 = {
  parameters: [],
  uid: "292abad2-9a17-4bd6-b113-e961bb1a7cb7",
  name: "dag-diamond-steps-k7t8d",
  status:
    '{"phase":"Succeeded","startedAt":"2019-12-19T21:26:09Z","finishedAt":"2019-12-19T21:26:25Z","nodes":{"dag-diamond-steps-k7t8d":{"id":"dag-diamond-steps-k7t8d","name":"dag-diamond-steps-k7t8d","displayName":"dag-diamond-steps-k7t8d","type":"DAG","templateName":"diamond","phase":"Succeeded","startedAt":"2019-12-19T21:26:09Z","finishedAt":"2019-12-19T21:26:25Z","children":["dag-diamond-steps-k7t8d-2523449910"],"outboundNodes":["dag-diamond-steps-k7t8d-2647084816","dag-diamond-steps-k7t8d-1942638250","dag-diamond-steps-k7t8d-2843500280"]},"dag-diamond-steps-k7t8d-1752910373":{"id":"dag-diamond-steps-k7t8d-1752910373","name":"dag-diamond-steps-k7t8d.A[0].echo(0:1)","displayName":"echo(0:1)","type":"Pod","templateName":"echo","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d-2523449910","startedAt":"2019-12-19T21:26:09Z","finishedAt":"2019-12-19T21:26:12Z","inputs":{"parameters":[{"name":"message","value":"A1"}]},"children":["dag-diamond-steps-k7t8d-2489894672","dag-diamond-steps-k7t8d-2506672291"]},"dag-diamond-steps-k7t8d-1942638250":{"id":"dag-diamond-steps-k7t8d-1942638250","name":"dag-diamond-steps-k7t8d.D[0].echo(1:2)","displayName":"echo(1:2)","type":"Pod","templateName":"echo","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d-2607338005","startedAt":"2019-12-19T21:26:21Z","finishedAt":"2019-12-19T21:26:24Z","inputs":{"parameters":[{"name":"message","value":"D2"}]}},"dag-diamond-steps-k7t8d-1989307502":{"id":"dag-diamond-steps-k7t8d-1989307502","name":"dag-diamond-steps-k7t8d.B[0].echo(2:3)","displayName":"echo(2:3)","type":"Pod","templateName":"echo","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d-2506672291","startedAt":"2019-12-19T21:26:15Z","finishedAt":"2019-12-19T21:26:19Z","inputs":{"parameters":[{"name":"message","value":"B3"}]},"children":["dag-diamond-steps-k7t8d-2607338005"]},"dag-diamond-steps-k7t8d-1995144924":{"id":"dag-diamond-steps-k7t8d-1995144924","name":"dag-diamond-steps-k7t8d.B[0].echo(1:2)","displayName":"echo(1:2)","type":"Pod","templateName":"echo","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d-2506672291","startedAt":"2019-12-19T21:26:15Z","finishedAt":"2019-12-19T21:26:19Z","inputs":{"parameters":[{"name":"message","value":"B2"}]},"children":["dag-diamond-steps-k7t8d-2607338005"]},"dag-diamond-steps-k7t8d-239961897":{"id":"dag-diamond-steps-k7t8d-239961897","name":"dag-diamond-steps-k7t8d.D[0]","displayName":"[0]","type":"StepGroup","templateName":"echo-thrice","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d-2607338005","startedAt":"2019-12-19T21:26:21Z","finishedAt":"2019-12-19T21:26:25Z","children":["dag-diamond-steps-k7t8d-2647084816","dag-diamond-steps-k7t8d-1942638250","dag-diamond-steps-k7t8d-2843500280"]},"dag-diamond-steps-k7t8d-2489894672":{"id":"dag-diamond-steps-k7t8d-2489894672","name":"dag-diamond-steps-k7t8d.C","displayName":"C","type":"Steps","templateName":"echo-thrice","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d","startedAt":"2019-12-19T21:26:14Z","finishedAt":"2019-12-19T21:26:19Z","inputs":{"parameters":[{"name":"message","value":"C"}]},"children":["dag-diamond-steps-k7t8d-278203882"],"outboundNodes":["dag-diamond-steps-k7t8d-3855365903","dag-diamond-steps-k7t8d-4180856445","dag-diamond-steps-k7t8d-2990764159"]},"dag-diamond-steps-k7t8d-2506672291":{"id":"dag-diamond-steps-k7t8d-2506672291","name":"dag-diamond-steps-k7t8d.B","displayName":"B","type":"Steps","templateName":"echo-thrice","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d","startedAt":"2019-12-19T21:26:15Z","finishedAt":"2019-12-19T21:26:20Z","inputs":{"parameters":[{"name":"message","value":"B"}]},"children":["dag-diamond-steps-k7t8d-2514557775"],"outboundNodes":["dag-diamond-steps-k7t8d-2722606774","dag-diamond-steps-k7t8d-1995144924","dag-diamond-steps-k7t8d-1989307502"]},"dag-diamond-steps-k7t8d-2514557775":{"id":"dag-diamond-steps-k7t8d-2514557775","name":"dag-diamond-steps-k7t8d.B[0]","displayName":"[0]","type":"StepGroup","templateName":"echo-thrice","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d-2506672291","startedAt":"2019-12-19T21:26:15Z","finishedAt":"2019-12-19T21:26:20Z","children":["dag-diamond-steps-k7t8d-2722606774","dag-diamond-steps-k7t8d-1995144924","dag-diamond-steps-k7t8d-1989307502"]},"dag-diamond-steps-k7t8d-2523449910":{"id":"dag-diamond-steps-k7t8d-2523449910","name":"dag-diamond-steps-k7t8d.A","displayName":"A","type":"Steps","templateName":"echo-thrice","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d","startedAt":"2019-12-19T21:26:09Z","finishedAt":"2019-12-19T21:26:14Z","inputs":{"parameters":[{"name":"message","value":"A"}]},"children":["dag-diamond-steps-k7t8d-3444761768"],"outboundNodes":["dag-diamond-steps-k7t8d-1752910373","dag-diamond-steps-k7t8d-2596109223","dag-diamond-steps-k7t8d-661468853"]},"dag-diamond-steps-k7t8d-2596109223":{"id":"dag-diamond-steps-k7t8d-2596109223","name":"dag-diamond-steps-k7t8d.A[0].echo(1:2)","displayName":"echo(1:2)","type":"Pod","templateName":"echo","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d-2523449910","startedAt":"2019-12-19T21:26:09Z","finishedAt":"2019-12-19T21:26:12Z","inputs":{"parameters":[{"name":"message","value":"A2"}]},"children":["dag-diamond-steps-k7t8d-2489894672","dag-diamond-steps-k7t8d-2506672291"]},"dag-diamond-steps-k7t8d-2607338005":{"id":"dag-diamond-steps-k7t8d-2607338005","name":"dag-diamond-steps-k7t8d.D","displayName":"D","type":"Steps","templateName":"echo-thrice","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d","startedAt":"2019-12-19T21:26:21Z","finishedAt":"2019-12-19T21:26:25Z","inputs":{"parameters":[{"name":"message","value":"D"}]},"children":["dag-diamond-steps-k7t8d-239961897"],"outboundNodes":["dag-diamond-steps-k7t8d-2647084816","dag-diamond-steps-k7t8d-1942638250","dag-diamond-steps-k7t8d-2843500280"]},"dag-diamond-steps-k7t8d-2647084816":{"id":"dag-diamond-steps-k7t8d-2647084816","name":"dag-diamond-steps-k7t8d.D[0].echo(0:1)","displayName":"echo(0:1)","type":"Pod","templateName":"echo","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d-2607338005","startedAt":"2019-12-19T21:26:21Z","finishedAt":"2019-12-19T21:26:24Z","inputs":{"parameters":[{"name":"message","value":"D1"}]}},"dag-diamond-steps-k7t8d-2722606774":{"id":"dag-diamond-steps-k7t8d-2722606774","name":"dag-diamond-steps-k7t8d.B[0].echo(0:1)","displayName":"echo(0:1)","type":"Pod","templateName":"echo","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d-2506672291","startedAt":"2019-12-19T21:26:15Z","finishedAt":"2019-12-19T21:26:19Z","inputs":{"parameters":[{"name":"message","value":"B1"}]},"children":["dag-diamond-steps-k7t8d-2607338005"]},"dag-diamond-steps-k7t8d-278203882":{"id":"dag-diamond-steps-k7t8d-278203882","name":"dag-diamond-steps-k7t8d.C[0]","displayName":"[0]","type":"StepGroup","templateName":"echo-thrice","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d-2489894672","startedAt":"2019-12-19T21:26:14Z","finishedAt":"2019-12-19T21:26:19Z","children":["dag-diamond-steps-k7t8d-3855365903","dag-diamond-steps-k7t8d-4180856445","dag-diamond-steps-k7t8d-2990764159"]},"dag-diamond-steps-k7t8d-2843500280":{"id":"dag-diamond-steps-k7t8d-2843500280","name":"dag-diamond-steps-k7t8d.D[0].echo(2:3)","displayName":"echo(2:3)","type":"Pod","templateName":"echo","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d-2607338005","startedAt":"2019-12-19T21:26:21Z","finishedAt":"2019-12-19T21:26:24Z","inputs":{"parameters":[{"name":"message","value":"D3"}]}},"dag-diamond-steps-k7t8d-2990764159":{"id":"dag-diamond-steps-k7t8d-2990764159","name":"dag-diamond-steps-k7t8d.C[0].echo(2:3)","displayName":"echo(2:3)","type":"Pod","templateName":"echo","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d-2489894672","startedAt":"2019-12-19T21:26:14Z","finishedAt":"2019-12-19T21:26:17Z","inputs":{"parameters":[{"name":"message","value":"C3"}]},"children":["dag-diamond-steps-k7t8d-2607338005"]},"dag-diamond-steps-k7t8d-3444761768":{"id":"dag-diamond-steps-k7t8d-3444761768","name":"dag-diamond-steps-k7t8d.A[0]","displayName":"[0]","type":"StepGroup","templateName":"echo-thrice","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d-2523449910","startedAt":"2019-12-19T21:26:09Z","finishedAt":"2019-12-19T21:26:14Z","children":["dag-diamond-steps-k7t8d-1752910373","dag-diamond-steps-k7t8d-2596109223","dag-diamond-steps-k7t8d-661468853"]},"dag-diamond-steps-k7t8d-3855365903":{"id":"dag-diamond-steps-k7t8d-3855365903","name":"dag-diamond-steps-k7t8d.C[0].echo(0:1)","displayName":"echo(0:1)","type":"Pod","templateName":"echo","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d-2489894672","startedAt":"2019-12-19T21:26:14Z","finishedAt":"2019-12-19T21:26:17Z","inputs":{"parameters":[{"name":"message","value":"C1"}]},"children":["dag-diamond-steps-k7t8d-2607338005"]},"dag-diamond-steps-k7t8d-4180856445":{"id":"dag-diamond-steps-k7t8d-4180856445","name":"dag-diamond-steps-k7t8d.C[0].echo(1:2)","displayName":"echo(1:2)","type":"Pod","templateName":"echo","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d-2489894672","startedAt":"2019-12-19T21:26:14Z","finishedAt":"2019-12-19T21:26:17Z","inputs":{"parameters":[{"name":"message","value":"C2"}]},"children":["dag-diamond-steps-k7t8d-2607338005"]},"dag-diamond-steps-k7t8d-661468853":{"id":"dag-diamond-steps-k7t8d-661468853","name":"dag-diamond-steps-k7t8d.A[0].echo(2:3)","displayName":"echo(2:3)","type":"Pod","templateName":"echo","phase":"Succeeded","boundaryID":"dag-diamond-steps-k7t8d-2523449910","startedAt":"2019-12-19T21:26:09Z","finishedAt":"2019-12-19T21:26:12Z","inputs":{"parameters":[{"name":"message","value":"A3"}]},"children":["dag-diamond-steps-k7t8d-2489894672","dag-diamond-steps-k7t8d-2506672291"]}}}',
  workflowTemplate: {
    uid: "b0927744-21c6-4b05-863e-e30f6eb9e248",
    name: "DAG Diamond Steps",
    version: 1576722808,
    manifest:
      'apiVersion: argoproj.io/v1alpha1\r\nkind: Workflow\r\nmetadata:\r\n  generateName: dag-diamond-steps-\r\nspec:\r\n  entrypoint: diamond\r\n  templates:\r\n  - name: echo\r\n    inputs:\r\n      parameters:\r\n      - name: message\r\n    container:\r\n      image: alpine:3.7\r\n      command: [echo, "{{inputs.parameters.message}}"]\r\n  - name: echo-thrice\r\n    inputs:\r\n      parameters:\r\n      - name: message\r\n    steps:\r\n    - - name: echo\r\n        template: echo\r\n        arguments:\r\n          parameters:\r\n          - {name: message, value: "{{inputs.parameters.message}}{{item}}"}\r\n        withItems: [1,2,3]\r\n  - name: diamond\r\n    dag:\r\n      tasks:\r\n      - name: A\r\n        template: echo-thrice\r\n        arguments:\r\n          parameters: [{name: message, value: A}]\r\n      - name: B\r\n        dependencies: [A]\r\n        template: echo-thrice\r\n        arguments:\r\n          parameters: [{name: message, value: B}]\r\n      - name: C\r\n        dependencies: [A]\r\n        template: echo-thrice\r\n        arguments:\r\n          parameters: [{name: message, value: C}]\r\n      - name: D\r\n        dependencies: [B, C]\r\n        template: echo-thrice\r\n        arguments:\r\n          parameters: [{name: message, value: D}]'
  }
};
