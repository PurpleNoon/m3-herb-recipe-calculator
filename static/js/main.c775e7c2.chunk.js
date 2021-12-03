(this["webpackJsonpm3-herb-recipe-calculator"]=this["webpackJsonpm3-herb-recipe-calculator"]||[]).push([[0],{115:function(e){e.exports=JSON.parse('{"name":"m3-herb-recipe-calculator","version":"0.1.1","homepage":"https://PurpleNoon.github.io/m3-herb-recipe-calculator","author":"\u6cea\u968f\u6a31\u82b1\u843d/PurpleNoon","dependencies":{"@craco/craco":"^6.4.2","@shlappas/itertools":"^2.1.1","@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","@types/jest":"^27.0.3","@types/lodash":"^4.14.177","@types/node":"^16.11.10","@types/react":"^17.0.37","@types/react-copy-to-clipboard":"^5.0.2","@types/react-dom":"^17.0.11","antd":"^4.17.2","lodash":"^4.17.21","mitt":"^3.0.0","react":"^17.0.2","react-copy-to-clipboard":"^5.0.4","react-dom":"^17.0.2","react-scripts":"4.0.3","typescript":"^4.5.2","web-vitals":"^1.0.1","worker-loader":"^3.0.8"},"scripts":{"start":"craco start","build":"craco build","test":"craco test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},132:function(e,t,n){},136:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),r=n(24),a=n.n(r),c=(n(132),n(68)),o=n(97),p=n.n(o),l=n(112),m=n(34),d=n(211),u=n(210),j=n(125),b=n(214),f=n(212),g=n(213),h=(n(99),n(42)),O=(n(113),[{name:"\u6025\u8feb",description:"\u65b9\u5757\u6316\u6398\u901f\u5ea6\u63d0\u5347(\u7b49\u7ea7x20%)\uff0c\u653b\u51fb\u901f\u5ea6\u63d0\u5347(\u7b49\u7ea7x10%)\uff0c\u73a9\u5bb6\u7684\u624b\u81c2\u6325\u52a8\u5f97\u66f4\u5feb",sampleDescription:"\u6316\u6398\u901f\u5ea6\u63d0\u5347",tags:["\u6b63\u9762\u6548\u679c","\u539f\u7248"]},{name:"\u9632\u706b",description:"\u83b7\u5f97\u5bf9\u706b\u3001\u7194\u5ca9\u3001\u70c8\u7130\u4eba\u706b\u7403\u51b2\u51fb\u4e0e\u5ca9\u6d46\u5757\u6548\u679c\u7684\u514d\u75ab",sampleDescription:"\u514d\u75ab\u706b\u7130\u4f24\u5bb3",tags:["\u6b63\u9762\u6548\u679c","\u539f\u7248"]},{name:"\u529b\u91cf",description:"\u529b\u91cfbuff\u53ef\u4ee5\u63d0\u9ad8\u73a9\u5bb6\u7684\u8fd1\u6218\u4f24\u5bb3\u3002\n\u5e26\u6709\u8be5buff\u7684\u73a9\u5bb6\u5c06\u63d0\u53470.3*\uff08\u7269\u7406\u653b\u51fb\u529b+\u6b66\u5668\u9762\u677f\uff09\u7684\u8fd1\u6218\u4f24\u5bb3\u3002\n\u7269\u7406\u8fdc\u7a0b\u4f24\u5bb3\u53ca\u9b54\u6cd5\u4f24\u5bb3\u5219\u4e0d\u53d7\u5f71\u54cd\u3002",sampleDescription:"\u63d0\u5347\u8fd1\u6218\u4f24\u5bb3",tags:["\u6b63\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e","\u673a\u5236\u91cd\u5199"]},{name:"\u7f13\u6162",description:"\u7f29\u5c0f\u89c6\u91ce\n\u6bcf\u7b49\u7ea7\u901f\u5ea6\u51cf\u616215%",sampleDescription:"\u79fb\u52a8\u901f\u5ea6\u964d\u4f4e",tags:["\u8d1f\u9762\u6548\u679c","\u539f\u7248"]},{name:"\u836f\u6c34\u65f6\u95f4\u7f29\u77ed7\u5206",description:"",sampleDescription:"",tags:["\u5176\u4ed6\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u901f\u5ea6",description:"\u589e\u52a0\u89c6\u91ce\uff0c\u6bcf\u7b49\u7ea7\u79fb\u52a8\u901f\u5ea6\u63d0\u534720%\u3002",sampleDescription:"\u63d0\u9ad8\u79fb\u52a8\u901f\u5ea6",tags:["\u6b63\u9762\u6548\u679c","\u539f\u7248"]},{name:"\u6c34\u4e0b\u547c\u5438",description:"\u6c27\u6c14\u6761\u5728\u6c34\u4e0b\u4e0d\u4f1a\u51cf\u5c11\u5e76\u4e14\u5728\u6c34\u4e0b\u7684\u89c6\u91ce\u53d8\u597d",sampleDescription:"\u6c34\u4e0b\u4e0d\u6d88\u8017\u6c27\u6c14",tags:["\u6b63\u9762\u6548\u679c","\u539f\u7248"]},{name:"\u51b0\u7f13",description:"\u8fd9\u4e2a\u6548\u679c\u5c06\u5bfc\u81f4\u73a9\u5bb6\u4f53\u6e29\u4e0b\u964d\uff0c\u6bcf5\u79d2\u989d\u5916\u964d\u4f4e3\u70b9\u3002",sampleDescription:"\u4f53\u6e29\u6301\u7eed\u4e0b\u964d",tags:["\u8d1f\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u9b54\u5bfc",description:"\u5728\u62e5\u6709\u6b64\u6548\u679c\u65f6\uff0c\u9020\u6210\u7684\u9b54\u6cd5\u4f24\u5bb3+30%\u3002",sampleDescription:"\u63d0\u9ad8\u9b54\u6cd5\u4f24\u5bb3",tags:["\u6b63\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u8df3\u8dc3\u63d0\u5347",description:"\u5141\u8bb8\u73a9\u5bb6\u8df3\u5f97\u66f4\u9ad8\uff0c\u6bcf\u7b49\u7ea7\u589e\u52a00.75\u7c73\u7684\u8df3\u8dc3\u80fd\u529b\uff0c\u5e76\u4e14\u6bcf\u7b49\u7ea7\u51cf\u5c111\u70b9\u6454\u843d\u4f24\u5bb3\u3002",sampleDescription:"\u63d0\u9ad8\u8df3\u8dc3\u529b",tags:["\u6b63\u9762\u6548\u679c","\u539f\u7248"]},{name:"\u591c\u89c6",description:"\u5728\u89c6\u89c9\u4e0a\u63d0\u5347\u4eae\u5ea6\u81f314\u7ea7\uff0c\u4ee5\u63d0\u5347\u9ed1\u6697\u4e2d\u7684\u89c6\u91ce\u4eae\u5ea6\uff0c\u6700\u540e10\u79d2\u4f1a\u95ea\u70c1\u3002\u5b9e\u9645\u5149\u7167\u4e0d\u53d8\u3002",sampleDescription:"\u63d0\u5347\u9ed1\u6697\u4e2d\u89c6\u91ce\u4eae\u5ea6",tags:["\u6b63\u9762\u6548\u679c","\u539f\u7248"]},{name:"\u611f\u6027",description:"\u6301\u6709\u6b64\u6548\u679c\u65f6\uff0c\u589e\u52a07.14%\u7684\u804c\u4e1a\u7ecf\u9a8c\u83b7\u53d6\u3002",sampleDescription:"\u63d0\u9ad8\u804c\u4e1a\u7ecf\u9a8c\u83b7\u5f97\u91cf",tags:["\u6b63\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u8bc5\u5492",description:"\u88ab\u8bc5\u5492\u65f6\uff0c\u9020\u6210\u7684\u4f24\u5bb3\u964d\u4f4e\uff0c\u53d7\u5230\u7684\u4f24\u5bb3\u63d0\u9ad8\u3002",sampleDescription:"\u53d7\u5230\u4f24\u5bb3\u63d0\u9ad8\uff0c\u9020\u6210\u4f24\u5bb3\u964d\u4f4e",tags:["\u8d1f\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u836f\u6c34\u7b49\u7ea7\u4e0b\u964d1\u7ea7",description:"",sampleDescription:"",tags:["\u5176\u4ed6\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u751f\u547d\u6062\u590d",description:"\u6bcf50\u523b\uff08=2.5\u79d2\uff09\u6062\u590d1\u70b9\u751f\u547d\u503c\uff0c\u6bcf\u7b49\u7ea7\u6062\u590d\u95f4\u9694\u51cf\u534a\u3002",sampleDescription:"\u6bcf\u79d2\u56de\u590d\u751f\u547d\u503c",tags:["\u6b63\u9762\u6548\u679c","\u539f\u7248"]},{name:"\u770b\u7a7f",description:"\u63d0\u9ad85\u70b9\u7a7f\u900f\u503c\u3002\n\u6301\u6709\u6b64buff\u65f6\u80fd\u770b\u5230\u5929\u7a7a\u5b88\u62a4\u9f99\u53ec\u5524\u7684\u771f\u7406\u6c34\u6676\u3002",sampleDescription:"\u63d0\u9ad8\u7a7f\u900f\u503c",tags:["\u6b63\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u4f24\u53e3",description:"\u5728\u62e5\u6709\u6b64\u6548\u679c\u65f6\uff0c\u65e0\u6cd5\u53d7\u5230\u6cbb\u7597\u6548\u679c\uff0c\u5982\u751f\u547d\u81ea\u7136\u56de\u590d\u3001\u7ad6\u7434\u6cbb\u7597\u3001\u5438\u8840\u7b49\u6548\u679c\u3002\n\u98df\u7528\u6599\u7406\u56de\u8840\u3001\u4f7f\u7528\u5730\u4e0b\u57ce\u8865\u8840\u7ad9\u4ecd\u7136\u6709\u6548\u3002\n\u88ab\u6301\u6709\u4e8c\u8f6c\u88ab\u52a8\u7684\u5251\u6597\u58eb\u653b\u51fb\u65f6\u589e\u52a040%\u53d7\u5230\u7684\u4f24\u5bb3",sampleDescription:"\u65e0\u6cd5\u56de\u590d\u751f\u547d\u503c",tags:["\u8d1f\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u836f\u6c34\u7b49\u7ea7\u63d0\u53471\u7ea7",description:"",sampleDescription:"",tags:["\u5176\u4ed6\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u6297\u6027\u63d0\u5347",description:"\u5e26\u6709\u6297\u6027\u63d0\u5347buff\u7684\u73a9\u5bb6\u5c06\u63d0\u9ad812\u70b9\u9632\u5fa1\u529b\uff0c\u65e0\u8bba\u8be5buff\u7684\u7b49\u7ea7\u662f\u591a\u5c11\u3002",sampleDescription:"\u964d\u4f4e\u53d7\u5230\u7684\u4f24\u5bb3",tags:["\u6b63\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e","\u673a\u5236\u91cd\u5199"]},{name:"\u865a\u5f31",description:"\u6bcf\u7ea7\u865a\u5f31\u72b6\u6001\u5c06\u964d\u4f4e\u73a9\u5bb60.5\u70b9\u7269\u7406\u8fd1\u6218\u4f24\u5bb3\uff0c\u8fc7\u9ad8\u7b49\u7ea7\u7684\u865a\u5f31\u72b6\u6001\u5c06\u4f7f\u73a9\u5bb6\u65e0\u6cd5\u9020\u6210\u8fd1\u6218\u4f24\u5bb3\u3002\n\u8fd9\u4e2a\u72b6\u6001\u4e5f\u4f1a\u5f71\u54cd\u73a9\u5bb6\u7a7a\u624b\u653b\u51fb\uff0c\u5e26\u67092\u7ea7\u865a\u5f31\u7684\u73a9\u5bb6\u7a7a\u624b\u653b\u51fb\u5c06\u6ca1\u6709\u4efb\u4f55\u6548\u679c\uff0c\u4e5f\u65e0\u6cd5\u51fb\u9000\u3002\n\u7269\u7406\u8fdc\u7a0b\u4f24\u5bb3\u4e0e\u9b54\u6cd5\u4f24\u5bb3\u5219\u4e0d\u53d7\u5f71\u54cd\u3002",sampleDescription:"\u964d\u4f4e\u7269\u7406\u8fd1\u6218\u4f24\u5bb3",tags:["\u8d1f\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e","\u673a\u5236\u91cd\u5199"]},{name:"\u9b54\u836f",description:"\u5728\u62e5\u6709\u6b64\u6548\u679c\u65f6\uff0c\u9020\u6210\u7684\u4f24\u5bb3+15%\u3002",sampleDescription:"\u63d0\u9ad8\u9020\u6210\u7684\u4f24\u5bb3",tags:["\u6b63\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u836f\u6c34\u65f6\u95f4\u63d0\u53478\u5206",description:"",sampleDescription:"",tags:["\u5176\u4ed6\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u7bad\u672f",description:"\u6301\u6709\u6b64\u6548\u679c\u65f6\uff0c\u63d0\u9ad830%\u7269\u7406\u8fdc\u7a0b\u4f24\u5bb3\u3002",sampleDescription:"\u63d0\u9ad8\u7269\u7406\u8fdc\u7a0b\u4f24\u5bb3",tags:["\u6b63\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u8d2a\u5a6a",description:"\u5728\u62e5\u6709\u6b64\u6548\u679c\u65f6\uff0c\u6389\u5b9d\u7387\u63d0\u9ad830%\u3002\n\u51fb\u6740\u9b54\u7269\u7684\u65f6\u5019\u6389\u843d\u66f4\u591a\u7684\u8d27\u5e01\u3002\n5.5.1\u7248\u672c\u53ca\u4ee5\u524d\uff0c\u8d2a\u5a6a\u6548\u679c\u7684\u6389\u5b9d\u7387\u63d0\u5347\u4e3a20%\u3002",sampleDescription:"\u63d0\u9ad8\u6389\u5b9d\u7387",tags:["\u6b63\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u51cb\u96f6",description:"\u6bcf40\u523b\uff08\u53732\u79d2\uff09\u7ed9\u4e881\u70b9\u4f24\u5bb3\u3002",sampleDescription:"\u6301\u7eed\u53d7\u5230\u4f24\u5bb3",tags:["\u8d1f\u9762\u6548\u679c","\u539f\u7248"]},{name:"\u8fc5\u6377",description:"\u6301\u6709\u6b64\u6548\u679c\u65f6\uff0c\u63d0\u9ad8\u56de\u907f\u7387\u3002",sampleDescription:"\u5927\u5e45\u63d0\u9ad8\u56de\u907f\u7387",tags:["\u6b63\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u94c1\u76ae",description:"\u6301\u6709\u6b64\u6548\u679c\u65f6\uff0c\u63d0\u9ad812\u70b9\u9632\u5fa1\u529b\u3002",sampleDescription:"\u63d0\u9ad8\u9632\u5fa1\u529b",tags:["\u6b63\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u7cbe\u786e",description:"\u62e5\u6709\u6b64\u6548\u679c\u65f6\uff0c\u66b4\u51fb\u7387\u63d0\u9ad810\u70b9\u3002",sampleDescription:"\u5927\u5e45\u63d0\u9ad8\u66b4\u51fb\u7387",tags:["\u6b63\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u5e78\u8fd0",description:"\u6301\u6709\u6b64\u6548\u679c\u65f6\uff0c\u80fd\u83b7\u5f97\u66f4\u591a\u7684\u751f\u4ea7\u7ecf\u9a8c\u3002",sampleDescription:"\u63d0\u9ad8\u751f\u4ea7\u7ecf\u9a8c\u83b7\u5f97\u91cf",tags:["\u6b63\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u5931\u624b",description:"\u653b\u51fb\u65f6\u6709\u4e00\u5b9a\u6982\u7387\u5931\u624b\u800c\u653b\u51fb\u65e0\u6548\u5316\u3002\u901a\u4fd7\u8bb2\u5c31\u662f\u547d\u4e2d\u964d\u4f4e",sampleDescription:"\u653b\u51fb\u65f6\u6709\u6982\u7387\u6253\u7a7a",tags:["\u8d1f\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u4e2d\u6bd2",description:"\u6bcf 25 \u523b\uff08= 1.25 \u79d2\uff09\u7ed9\u4e88 1 \u70b9\u4f24\u5bb3\uff0c\u6bcf\u7b49\u7ea7\u4f24\u5bb3\u95f4\u9694\u51cf\u534a\uff08\u6570\u503c\u53d6\u6574\uff09",sampleDescription:"\u6301\u7eed\u53d7\u5230\u4f24\u5bb3",tags:["\u8d1f\u9762\u6548\u679c","\u539f\u7248"]},{name:"\u6bc5\u529b",description:"\u6301\u6709\u6b64\u6548\u679c\u65f6\uff0c\u6b7b\u4ea1\u540e\u4e0d\u4f1a\u6389\u843dxp\u548c\u8d27\u5e01\u3002",sampleDescription:"\u6b7b\u4ea1\u65f6\u4e0d\u6389\u843d\u8d27\u5e01\u548c\u7ecf\u9a8c",tags:["\u6b63\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u9965\u997f",description:"\u5bfc\u81f4\u9965\u997f\u503c\u66f4\u5feb\u7684\u6d88\u8017\uff0c\u6bcf\u523b\u51cf\u5c11 0.005 \xd7 \u7b49\u7ea7 \u7684\u9965\u997f\u503c\uff0c\u6362\u8a00\u4e4b\u6bcf\u79d2\u51cf\u5c11 0.1 \xd7 \u7b49\u7ea7 \u7684\u9965\u997f\u503c\u3002",sampleDescription:"\u66f4\u5feb\u66f4\u5bb9\u6613\u6d88\u8017\u9971\u98df\u5ea6",tags:["\u8d1f\u9762\u6548\u679c","\u539f\u7248"]},{name:"\u751c\u871c",description:"\u6301\u6709\u6b64\u6548\u679c\u65f6\uff0c\u6bcf5\u79d2\u7684\u751f\u547d\u6062\u590d\u91cf\u53d8\u4e3a\u4e24\u500d\uff0c\u7a7f\u900f\u503c+3\uff0c\u66b4\u51fb\u4f24\u5bb3+20%\u3002\n5.6.5\u7248\u672c\u524d\uff0c\u751c\u871c\u6548\u679c\u4e3a\u63d0\u9ad8\u751f\u547d\u6062\u590d\u901f\u5ea6\u3002",sampleDescription:"\u63d0\u9ad8\u751f\u547d\u6062\u590d",tags:["\u6b63\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u8131\u6c34",description:"\u5728\u62e5\u6709\u6b64\u6548\u679c\u65f6\uff0c\u6bcf5\u79d2\u989d\u5916\u51cf\u5c1150\u70b9\u6c34\u91cf\u3002",sampleDescription:"\u6c34\u91cf\u4e0d\u65ad\u51cf\u5c11",tags:["\u8d1f\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u751c\u70b9",description:"\u5728\u62e5\u6709\u6b64\u6548\u679c\u65f6\uff0c\u66b4\u51fb/\u56de\u907f+8\uff0c\u9020\u6210\u7684\u4f24\u5bb3+10%\uff0c\u66b4\u51fb\u4f24\u5bb3+20%\u3002\n5.6.5-2\u4ee5\u524d\u7684\u6548\u679c\u4e3a\uff1a\u9020\u6210\u7684\u4f24\u5bb3+10%\uff0c\u66b4\u51fb\u7387+8\uff0c\u56de\u907f\u7387+8\u3002",sampleDescription:"\u63d0\u9ad8\u66b4\u51fb\u7387\u4e0e\u56de\u907f\u7387",tags:["\u6b63\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u5267\u6bd2",description:"\u62e5\u6709\u8be5\u6548\u679c\u65f6\uff0c\u6bcf5\u79d2\u53d7\u5230\u6700\u5927\u751f\u547d\u503c30%\u7684\u4f24\u5bb3\u3002\u8be5\u4f24\u5bb3\u65e0\u6cd5\u88ab\u95ea\u907f\uff0c\u4e0d\u53d7\u9632\u5fa1\u529b\u51cf\u514d\uff0c\u4f46\u201c\u53d7\u5230\u4f24\u5bb3-%\u201d\u6709\u51cf",sampleDescription:"\u6301\u7eed\u53d7\u5230\u5927\u91cf\u4f24\u5bb3",tags:["\u8d1f\u9762\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]},{name:"\u968f\u673a\u6548\u679c",description:"",sampleDescription:"",tags:["\u5176\u4ed6\u6548\u679c","\u9b54\u6cd5\u91d1\u5c5e"]}]),v=Object(h.keyBy)(O,"name");var x=function(e){var t=Object(h.flatten)(e.map((function(e){return e.tags.filter((function(e){return["\u6b63\u9762\u6548\u679c","\u8d1f\u9762\u6548\u679c","\u5176\u4ed6\u6548\u679c"].includes(e)})).map((function(t){return[t,e]}))}))),n=Object(h.groupBy)(t,(function(e){return e[0]}));return Object.keys(n).reduce((function(e,t){return e[t]=n[t].map((function(e){return e[1]})),e}),{})}(O),D={"\u6b63\u9762\u6548\u679c":1,"\u5176\u4ed6\u6548\u679c":2,"\u8d1f\u9762\u6548\u679c":3};function y(e,t){return(D[e]||0)-(D[t]||0)}var w={"\u8d1f\u9762\u6548\u679c":1,"\u5176\u4ed6\u6548\u679c":2,"\u6b63\u9762\u6548\u679c":3};function C(e,t){return(w[e]||0)-(w[t]||0)}function k(e){var t=v[e].tags;return["\u6b63\u9762\u6548\u679c","\u5176\u4ed6\u6548\u679c","\u8d1f\u9762\u6548\u679c"].find((function(e){return t.includes(e)}))||""}var S=n(114),_=(n(136),n(115));function P(){return new Worker(n.p+"static/js/findHerbRecipes.worker.fdd675b3.worker.js")}var R=n(7),B=d.a.Option,F=d.a.OptGroup,I={labelCol:{span:6},wrapperCol:{span:18}},E={wrapperCol:{offset:6,span:18}},T={"\u6b63\u9762\u6548\u679c":"herb-card__effect--positive","\u5176\u4ed6\u6548\u679c":"herb-card__effect--other","\u8d1f\u9762\u6548\u679c":"herb-card__effect--negative"},L=function(e){return new Promise((function(t){var n=new P;n.onmessage=function(e){var s=e.data,i={finishCalculateHerbRecipes:function(e){n.terminate();var s=e.data.data;t(s.list)}};i[s.name]&&i[s.name](e)},n.postMessage({name:"findRecipes",data:e})}))},M=function(){var e=Object(s.useState)({targetEffects:["\u836f\u6c34\u7b49\u7ea7\u63d0\u53471\u7ea7","\u836f\u6c34\u65f6\u95f4\u63d0\u53478\u5206"],avoidEffects:[],topCount:99}),t=Object(m.a)(e,1)[0],n=u.a.useForm(),i=Object(m.a)(n,1)[0],r=Object(s.useState)([]),a=Object(m.a)(r,2),o=a[0],h=a[1],O=Object(s.useState)(!1),v=Object(m.a)(O,2),D=v[0],w=v[1],P=function(){var e=Object(l.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,L(t);case 3:n=e.sent,h(n),w(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=Object.keys(x).sort(y).map((function(e){return Object(R.jsx)(F,{label:e,children:x[e].map((function(t){var n=t.name,s=t.sampleDescription;return Object(R.jsx)(B,{value:n,children:"".concat(n," ").concat(s?"[".concat(s,"]"):"")},n+e)}))},e)})),N=Object.keys(x).sort(C).map((function(e){return Object(R.jsx)(F,{label:e,children:x[e].map((function(t){var n=t.name,s=t.sampleDescription;return Object(R.jsx)(B,{value:n,children:"".concat(n," ").concat(s?"[".concat(s,"]"):"")},n+e)}))},e)})),J=function(){return j.b.success("\u836f\u8349\u540d\u79f0\u590d\u5236\u5b8c\u6210")};return Object(R.jsx)("div",{children:Object(R.jsxs)("div",{style:{margin:"0 auto",width:480},children:[Object(R.jsx)("div",{children:Object(R.jsxs)(u.a,Object(c.a)(Object(c.a)({initialValues:t},I),{},{form:i,name:"control-hooks",onFinish:P,children:[Object(R.jsx)("h2",{style:{textAlign:"center",marginBottom:0},children:"\u836f\u8349\u8ba1\u7b97\u5668"}),Object(R.jsxs)("div",{children:[Object(R.jsxs)("div",{style:{float:"right",fontSize:12,color:"gray"},children:["Version ",_.version]}),Object(R.jsx)("div",{style:{clear:"both"}})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)("hr",{}),"\u4f5c\u8005\uff1a\u6cea\u968f\u6a31\u82b1\u843d",Object(R.jsx)("span",{style:{marginLeft:"1rem"}}),"QQ\uff1a346014945",Object(R.jsx)("br",{}),"\u76ee\u524d\u8fd8\u5728\u4e0d\u65ad\u5b8c\u5584\u4e2d\uff08\u4f5b\u7cfb\u66f4\u65b0ing\uff09\uff0c\u5982\u679c\u6709\u4ec0\u4e48\u597d\u7684\u5efa\u8bae\u6216\u8005\u53d1\u73b0\u4e86 bug\uff0c\u6b22\u8fce\u8054\u7cfb\u4f5c\u8005_(:\u0437\u300d\u2220)_",Object(R.jsx)("br",{}),"PS: \u67e5\u627e\u914d\u65b9\u53ef\u80fd\u4f1a\u6162\u4e00\u70b9\uff0c\u56e0\u4e3a\u914d\u65b9\u6570\u91cf\u6bd4\u8f83\u5927\uff08\u53d6\u51b3\u4e8e\u9009\u62e9\u7684\u671f\u671b\u7684\u6548\u679c\u548c\u6392\u9664\u7684\u6548\u679c\uff09\uff0c\u7a0d\u7b49\u4e00\u4f1a\u5373\u53ef",Object(R.jsx)("hr",{})]}),Object(R.jsx)(u.a.Item,{name:"targetEffects",label:"\u671f\u671b\u7684\u6548\u679c",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u671f\u671b\u7684\u6548\u679c"}],children:Object(R.jsx)(d.a,{mode:"multiple",allowClear:!0,tagRender:function(e){var t=e.value,n=e.closable,s=e.onClose;return Object(R.jsx)(b.a,{color:"default",onMouseDown:function(e){e.preventDefault(),e.stopPropagation()},closable:n,onClose:s,style:{marginRight:3},children:t})},children:M})}),Object(R.jsx)(u.a.Item,{name:"avoidEffects",label:"\u6392\u9664\u7684\u6548\u679c",children:Object(R.jsx)(d.a,{mode:"multiple",allowClear:!0,tagRender:function(e){var t=e.value,n=e.closable,s=e.onClose;return Object(R.jsx)(b.a,{color:"default",onMouseDown:function(e){e.preventDefault(),e.stopPropagation()},closable:n,onClose:s,style:{marginRight:3},children:t})},children:N})}),Object(R.jsx)(u.a.Item,{name:"topCount",label:"\u914d\u65b9\u6570\u91cf",children:Object(R.jsx)(f.a,{min:1,keyboard:!0})}),Object(R.jsx)(u.a.Item,Object(c.a)(Object(c.a)({},E),{},{children:Object(R.jsx)(g.a,{type:"primary",htmlType:"submit",loading:D,children:"\u67e5\u627e\u914d\u65b9"})}))]}))}),Object(R.jsx)("hr",{}),Object(R.jsxs)("div",{children:[Object(R.jsx)("h3",{children:"\u836f\u6c34\u914d\u65b9\u5217\u8868:"}),Object(R.jsx)("ul",{style:{listStyleType:"decimal"},children:o.map((function(e){var t,n=Object(m.a)(e,2),s=n[0],i=n[1],r=Object(R.jsx)("div",{children:s.map((function(e){return e.name})).map((function(e,t){return Object(R.jsx)(S.CopyToClipboard,{text:e,onCopy:J,children:Object(R.jsx)(b.a,{style:{cursor:"pointer"},children:e})},e+String(t))}))});return Object(R.jsxs)("li",{style:{marginBottom:4},children:[r,Object(R.jsxs)("div",{children:["\u836f\u6c34\u53d8\u5316\u65f6\u95f4: ",(t=i.time,t>=0?"+".concat(t):String(t))]}),Object(R.jsx)("div",{children:"\u6548\u679c\uff1a"}),Object.entries(i.effects).sort((function(e,t){return n=e[0],s=t[0],y(k(n),k(s));var n,s})).map((function(e){var t=Object(m.a)(e,2),n=t[0],s=t[1];return Object(R.jsxs)("div",{style:{marginLeft:"2rem"},children:[Object(R.jsx)("span",{className:T[k(n)]||"",children:n}),": ",s]},n)}))]},s.map((function(e){return e.name})).join(","))}))})]})]})})};var N=function(){return Object(R.jsx)("div",{children:Object(R.jsx)(M,{})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,215)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),i(e),r(e),a(e)}))};n(207);a.a.render(Object(R.jsx)(i.a.StrictMode,{children:Object(R.jsx)(N,{})}),document.getElementById("root")),J(console.log)}},[[208,1,2]]]);
//# sourceMappingURL=main.c775e7c2.chunk.js.map