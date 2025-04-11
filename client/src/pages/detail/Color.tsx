import { FC, useState } from 'react'
import { colors as colorsList } from '../../utils/constants'

interface Props {
  colors: string;
}
const Color:FC<Props> = ({colors}) => {
  const [selected, setSelected] = useState<string>("");

  const toggle = (id: string) => {
    setSelected(selected === id ? "" : id);
  };//tekrar tiklama durumunda ringi kaldir 
  
  return (
    <div>
    <h2 className="font-semibold mb-3">Renk Seçiniz</h2>

    <div className="flex gap-5">
      {colors.split(",").map((id) => {
        // elimdeki string bir veriyi diziye çevirmek için split kullanırim. ogeler arasindaki virgule gore ayir derim. 
        const color = colorsList.find((i) => i.id == id);
        const isSelected = selected === id;

        return (
          <div
            className={isSelected ? "ring-3 ring-my-blue rounded-full" : ""}
          >
            <div
              onClick={() => toggle(id)}
              className="m-1 size-9 rounded-full cursor-pointer"
              style={{ background: color?.code }}
            />
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Color