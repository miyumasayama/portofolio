import { FC, useEffect, useRef } from "react"

export const Canvas: FC = () => {
    const ref = useRef<HTMLCanvasElement>(null)
 
    useEffect(() => {
        const canvas = ref.current
        const imgCnt = 40;
        const aryImg: {
            posx: number,
            posy: number,
            sizew: number,
            sizeh: number,
            speedy: number,
            angle: number
        }[] = [];
        const aryCloud: {
            posx: number,
            posy: number,
            img: HTMLImageElement,
            speed: number
        }[] = [];
        const effectimgw = 2000;
        const effectimgh = 1000;
        const imgBaseSizeW = 16;
        const imgBaseSizeH = 20;
        const aspectMax = 2.5;
        const aspectMin = 0.5;
        const speedMax = 2.0;
        const speedMin = 0.5;
        const wind = 100;
        const img = new Image();
        img.src = "http://localhost:3000//leaf.png";
       
        if (!canvas) return
        const context = canvas.getContext('2d') 
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
      
        
        if (!context) return;
        const setImagas =() =>  {
            let aspect = 0;
            for (let i = 0; i < imgCnt; i++) {
              aspect = Math.random() * (aspectMax - aspectMin) + aspectMin;
              aryImg.push({
                "posx": Math.random() * effectimgw,
                "posy": Math.random() * effectimgh,
                "sizew": imgBaseSizeW * aspect,
                "sizeh": imgBaseSizeH * aspect,
                "speedy": Math.random() * (speedMax - speedMin) + speedMin,
                "angle": Math.random() * 360,
              });
            }
        }
          
          let idx = 0;
          let idxc = 0;
          let cos = 0;
          let sin = 0;
          const rad = Math.PI / 180;
          const flow =() => {
            context.clearRect(0, 0, effectimgw, effectimgh);
            for (idx = 0; idx < imgCnt; idx++) {
              aryImg[idx].posx += wind / aryImg[idx].sizew;
              aryImg[idx].posy += aryImg[idx].speedy;
              (idx % 2) ? aryImg[idx].angle += 1 : aryImg[idx].angle -= 1;
              cos = Math.cos(aryImg[idx].angle * rad);
              sin = Math.sin(aryImg[idx].angle * rad);
              context.setTransform(cos, sin, sin, cos, aryImg[idx].posx, aryImg[idx].posy);
              context.drawImage(img, 0, 0, aryImg[idx].sizew, aryImg[idx].sizeh);
              context.setTransform(1, 0, 0, 1, 0, 0);
              if (aryImg[idx].posy >= effectimgh) {
                aryImg[idx].posy = -aryImg[idx].sizeh;
                if (imgCnt < idx) {
                  aryImg.splice(idx, 1);
                }
              }
              if (aryImg[idx].posx >= effectimgw) {
                aryImg[idx].posx = -aryImg[idx].sizew;
                if (imgCnt < idx) {
                  aryImg.splice(idx, 1);
                }
              }
            }
            for (idxc = 0; idxc < aryCloud.length; idxc++) {
              context.drawImage(aryCloud[idxc].img, aryCloud[idxc].posx, aryCloud[idxc].posy, aryCloud[idxc].img.width, aryCloud[idxc].img.height);
              aryCloud[idxc].posx += aryCloud[idxc].speed / 15;
              if (aryCloud[idxc].posx > effectimgw) {
                aryCloud[idxc].posx = -aryCloud[idxc].img.width;
              }
            }
          }
          const flowStart =() => {
            setImagas();
            setInterval(flow, 10);
          }
        

        img.onload = () => {
            resizeCanvas();
            flowStart();
            };
          
        context.fillStyle = '#000000'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
      }, [])
      
    return (
        <canvas 
            ref={ref} 
            height='calc(100vh - 60px)'
            width='100vw'
        />
    )
}