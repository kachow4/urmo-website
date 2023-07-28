import Image from 'next/image'
import { FC } from 'react'

export default function Team() {
  return (
    <div className='flex flex-col w-full gap-5'>
        <span className='w-full text-center text-5xl font-thin p-20'>{`meet the team`.toUpperCase()}</span>
        <div className='grid grid-cols-4 px-60'>
            {Array(43)
                .fill(0)
                .map((x, i) => (
                <TeamMember
                    key={currentGenRoster[i].id}
                    name={currentGenRoster[i].name}
                    position={currentGenRoster[i].position}
                    imgPath={currentGenRoster[i].imgPath}
                    />
                ))}
        </div>
        <GenerationRoster
            number='10th'
            roster={tenthGenNewbies}
            imgPath='/images/photoshoot/10thGenPhotoshoot.jpg'
        />
        <GenerationRoster
            number='9th'
            roster={ninthGenNewbies}
            imgPath='/images/photoshoot/9thGenPhotoshoot.jpg'
        />
        <GenerationRoster
            number='8th'
            roster={eightGenNewbies}
            imgPath='/images/photoshoot/8thGenPhotoshoot.jpg'
        />
        <GenerationRoster
            number='7th'
            roster={seventhGenNewbies}
            imgPath='/images/photoshoot/7thGenPhotoshoot.jpg'
        />
        <GenerationRoster
            number='6th'
            roster={sixthGenNewbies}
            imgPath='/images/photoshoot/6thGenPhotoshoot.jpg'
        />
        <GenerationRoster
            number='5th'
            roster={fifthGenNewbies}
            imgPath='/images/photoshoot/5thGenPhotoshoot.jpg'
        />
        <GenerationRoster
            number='4th'
            roster={fourthGenNewbies}
            imgPath='/images/photoshoot/4thGenPhotoshoot.jpg'
        />
        <GenerationRoster
            number='3rd'
            roster={thirdGenNewbies}
            imgPath='/images/photoshoot/3rdGenPhotoshoot.jpg'
        />
        <GenerationRoster
            number='2nd'
            roster={fourthGenNewbies}
            imgPath='/images/photoshoot/2ndGenPhotoshoot.jpg'
        />
        <GenerationRoster
            number='1st'
            roster={thirdGenNewbies}
            imgPath='/images/photoshoot/1stGenPhotoshoot.jpg'
        />
    </div>
  )
}

const currentGenRoster = [
  {
    id: 0,
    name: `Aaron Nonaka`,
    position: `Captain`,
    imgPath: `/images/10thGenProfiles/AaronNonaka.jpg`,
  },
  {
    id: 1,
    name: `Alex Do`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/AlexDo.jpg`,
  },
  {
    id: 2,
    name: `Alyssa Asprer`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/AlyssaAsprer.jpg`,
  },
  {
    id: 3,
    name: `Ashley Tsang`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/AshleyTsang.jpg`,
  },
  {
    id: 4,
    name: `Boram Gaudet`,
    position: `Returner`,
    imgPath: `/images/10thGenProfiles/BoramGaudet.jpg`,
  },
  {
    id: 5,
    name: `Brandon Galero`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/BrandonGalero.jpg`,
  },
  {
    id: 6,
    name: `Brandon Liu`,
    position: `Returner`,
    imgPath: `/images/10thGenProfiles/BrandonLiu.jpg`,
  },
  {
    id: 7,
    name: `Brian de Jesus`,
    position: `Returner`,
    imgPath: `/images/10thGenProfiles/BrianDeJesus.jpg`,
  },
  {
    id: 8,
    name: `Catherine Vo`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/CatherineVo.jpg`,
  },
  {
    id: 9,
    name: `Chanakan Thammasan`,
    position: `Coordinator`,
    imgPath: `/images/10thGenProfiles/ChanakanThammasan.jpg`,
  },
  {
    id: 10,
    name: `Christiana Ma`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/ChristianaMa.jpg`,
  },
  {
    id: 11,
    name: `Connie Shi`,
    position: `Returner`,
    imgPath: `/images/10thGenProfiles/ConnieShi.jpg`,
  },
  {
    id: 12,
    name: `Connor Sytha`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/ConnorSytha.jpg`,
  },
  {
    id: 13,
    name: `Crystal Wong`,
    position: `Returner`,
    imgPath: `/images/10thGenProfiles/CrystalWong.jpg`,
  },
  {
    id: 14,
    name: `Danny Pham`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/DannyPham.jpg`,
  },
  {
    id: 15,
    name: `Elizabeth Castreje`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/ElizabethCastreje.jpg`,
  },
  {
    id: 16,
    name: `Florence Liu`,
    position: `Captain`,
    imgPath: `/images/10thGenProfiles/FlorenceLiu.jpg`,
  },
  {
    id: 17,
    name: `Iris Chuan`,
    position: `Returner`,
    imgPath: `/images/10thGenProfiles/IrisChuan.jpg`,
  },
  {
    id: 18,
    name: `Jadon Kwan`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/JadonKwan.jpg`,
  },
  {
    id: 19,
    name: `Jane Lai`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/JaneLai.jpg`,
  },
  {
    id: 20,
    name: `Jenny Marklevits`,
    position: `Returner`,
    imgPath: `/images/10thGenProfiles/JennyMarklevitz.jpg`,
  },
  {
    id: 21,
    name: `Justyn Gelacio`,
    position: `Returner`,
    imgPath: `/images/10thGenProfiles/JustynGelacio.jpg`,
  },
  {
    id: 22,
    name: `Kaoru Ando`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/KaoruAndo.jpg`,
  },
  {
    id: 23,
    name: `Katie Chow`,
    position: `Returner`,
    imgPath: `/images/10thGenProfiles/KatieChow.jpg`,
  },
  {
    id: 24,
    name: `Kaylyn Chang`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/KaylynChang.jpg`,
  },
  {
    id: 25,
    name: `Lachlan Ma`,
    position: `Returner`,
    imgPath: `/images/10thGenProfiles/LachlanMa.jpg`,
  },
  {
    id: 26,
    name: `Lian Call`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/LianCall.jpg`,
  },
  {
    id: 27,
    name: `Matthew Caday`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/MatthewCaday.jpg`,
  },
  {
    id: 28,
    name: `Matthew Lin`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/MatthewLin.jpg`,
  },
  {
    id: 29,
    name: `Megan Chen`,
    position: `Coordinator`,
    imgPath: `/images/10thGenProfiles/MeganChen.jpg`,
  },
  {
    id: 30,
    name: `Melanie Torres`,
    position: `Captain`,
    imgPath: `/images/10thGenProfiles/MelanieTorres.jpg`,
  },
  {
    id: 31,
    name: `Mesac Garriga`,
    position: `Returner`,
    imgPath: `/images/10thGenProfiles/MesacGarriga.jpg`,
  },
  {
    id: 32,
    name: `Nhi Nguyen`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/NhiNguyen.jpg`,
  },
  {
    id: 33,
    name: `Nicholas Alvarez`,
    position: `Returner`,
    imgPath: `/images/10thGenProfiles/NicholasAlvarez.jpg`,
  },
  {
    id: 34,
    name: `Reena Arnoco`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/ReenaArnoco.jpg`,
  },
  {
    id: 35,
    name: `Richard Chen`,
    position: `Returner`,
    imgPath: `/images/10thGenProfiles/RichardChen.jpg`,
  },
  {
    id: 36,
    name: `Riley Garcia`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/RileyGarcia.jpg`,
  },
  {
    id: 37,
    name: `Satoshi Ueda`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/SatoshiUeda.jpg`,
  },
  {
    id: 38,
    name: `Stella Shin`,
    position: `Returner`,
    imgPath: `/images/10thGenProfiles/StellaShin.jpg`,
  },
  {
    id: 39,
    name: `Tyler Matsunami`,
    position: `Returner`,
    imgPath: `/images/10thGenProfiles/TylerMatsunami.jpg`,
  },
  {
    id: 40,
    name: `Vanessa Lu`,
    position: `Returner`,
    imgPath: `/images/10thGenProfiles/VanessaLu.jpg`,
  },
  {
    id: 41,
    name: `Vu Dang Nguyen`,
    position: `Newbie`,
    imgPath: `/images/10thGenProfiles/VuDangNguyen.jpg`,
  },
  {
    id: 42,
    name: `William Kim`,
    position: `Returner`,
    imgPath: `/images/10thGenProfiles/WilliamKim.jpg`,
  },
]
const tenthGenNewbies = [
    {id: 0, name:'Alex Do'},
    {id: 1, name: 'Alyssa Asprer'},
    {id: 2, name:'Ashley Tsang'},
    {id: 3, name:'Brandon Galero'},
    {id: 4, name:'Catherine Vo'},
    {id: 5, name:'Christiana Ma'},
    {id: 6, name:'Connor Sytha'},
    {id: 7, name:'Danny Pham'},
    {id: 8, name:'Jadon Kwan'},
    {id: 9, name:'Jane Lai'},
    {id: 10, name:'Kaylyn Chang'},
    {id: 11, name:'Kaoru Ando'},
    {id: 12, name:'Lian Call'},
    {id: 13, name:'Elizabeth Castreje'},
    {id: 14, name:'Matthew Caday'},
    {id: 15, name:'Matthew Lin'},
    {id: 16, name:'Nhi Nguyen'},
    {id: 17, name:'Reenalaine Arnoco'},
    {id: 18, name:'Riley Garcia'},
    {id: 19, name:'Satoshi Ueda'},
    {id: 20, name:'Vu Dang Nguyen'}
]
const ninthGenNewbies = [
    {id: 0, name:'Aaron Nonaka'},
    {id: 1, name: 'Boram Gaudet'},
    {id: 2, name:'Brandon Liu'},
    {id: 3, name:'Brian de Jesus'},
    {id: 4, name:'Connie Shi'},
    {id: 5, name:'Crystal Wong'},
    {id: 6, name:'Derek Jiang'},
    {id: 7, name:'Iris Chuan'},
    {id: 8, name:'Katie Chow'},
    {id: 9, name:'Lachlan Ma'},
    {id: 10, name:'Melanie Torres'},
    {id: 11, name:'Mesac Garriga'},
    {id: 12, name:'Nathan Yeo'},
    {id: 13, name:'Nicholas Alvarez'},
    {id: 14, name:'Richard Chen'},
    {id: 15, name:'Stephanie Lai'},
    {id: 16, name:'Tyler Matsunami'},
    {id: 17, name:'William Kim'},
    {id: 18, name:'Yuko Shimura'}
]
const eightGenNewbies = [
    {id: 0, name:'Albert Lin'},
    {id: 1, name: 'Alexander Diaz'},
    {id: 2, name:'Allison Niu'},
    {id: 3, name:'Becky Luk'},
    {id: 4, name:'Chanakan Thammasan'},
    {id: 5, name:'Earllyn Momongan'},
    {id: 6, name:'Eric Tran'},
    {id: 7, name:'Florence Liu'},
    {id: 8, name:'Jennifer Mayuko Marklevits'},
    {id: 9, name:'Justyn Gelacio'},
    {id: 10, name:'Marilyn Ruiz'},
    {id: 11, name:'Matthew Laine'},
    {id: 12, name:'Megan Chen'},
    {id: 13, name:'Nathaniel Yip'},
    {id: 14, name:'Robert Chen'},
    {id: 15, name:'Robert La'},
    {id: 16, name:'Stella Shin'},
    {id: 17, name:'Sylvia Diep'},
    {id: 18, name:'Vanessa Lu'},
    {id: 19, name:'Vivian Zhang'},
]
const seventhGenNewbies= [
    {id: 0, name:'Andrew Shin'},
    {id: 1, name: 'Andy Nguyen'},
    {id: 2, name:'Cristabel Nuñez'},
    {id: 3, name:'Dominik Haws'},
    {id: 4, name:'Dutonne Chong'},
    {id: 5, name:'Eileen Liu'},
    {id: 6, name:'Kyle Pastor'},
    {id: 7, name:'Esther Wang'},
    {id: 8, name:'Jeannie Ur'},
    {id: 9, name:'Joshua Resuello'},
    {id: 10, name:'Justin Lonh'},
    {id: 11, name:'Khalia Rehemtulla'},
    {id: 12, name:'Leslie Ou'},
    {id: 13, name:'Linda Nguyen'},
    {id: 14, name:'Madeleine Kyeremateng'},
    {id: 15, name:'Martin Trinidad'},
    {id: 16, name:'Mia Ramos'},
    {id: 17, name:'Offiong Ekanem'},
    {id: 18, name:'Philip Nguyen'},
    {id: 19, name:'Tracy La'},
    {id: 20, name:'Tyanna Bui'},
    {id: 20, name:'Woody Omaree'}
]
const sixthGenNewbies= [
    {id: 0, name:'Abigail Jo'},
    {id: 1, name: 'Chris Banares'},
    {id: 2, name:'Clinton Thai'},
    {id: 3, name:'David Sun'},
    {id: 4, name:'Dennis Nguyen'},
    {id: 5, name:'Edward De Jesus'},
    {id: 6, name:'Gerald Berzuela'},
    {id: 7, name:'Hannah Nguyen'},
    {id: 8, name:'Itzel Ruiz-Sotelo'},
    {id: 9, name:'Jason Tam'},
    {id: 10, name:'Jhannel Ocampo'},
    {id: 11, name:'Jonathan Park'},
    {id: 12, name:'Jonathan Park'},
    {id: 13, name:'Kian Thompson'},
    {id: 14, name:'Ngan La'},
    {id: 15, name:'Nini Buu'},
    {id: 16, name:'Rosalind Ball'},
    {id: 17, name:'Shalini Agrawal'},
    {id: 18, name:'Tien Pham'},
    {id: 19, name:'Tina Wu'},
    {id: 20, name:'Victor Nguyenbui'},
    {id: 20, name:'Vivian Chen'}
]
const fifthGenNewbies= [
    {}
]
const fourthGenNewbies= [
    {}
]
const thirdGenNewbies= [
    {}
]
const secondGenNewbies= [
    {}
]
const firstGenNewbies= [
    {}
]

const TeamMember: FC<{
  name: string
  position: string
  imgPath: string
}> = ({ name, position, imgPath }) => (
    <div className='overflow-hidden w-full h-[28vh]'>
        <div className="relative inline-block w-full h-full transition ease-out duration-500 hover:scale-[1.15]">
            <div className="-z-1"> 
                <Image 
                    priority
                    src={imgPath}
                    fill={true}
                    style={{objectFit: "cover", objectPosition: "center"}}
                    alt={`${name} Profile Picture`}
                />
            </div>
            <div className="relative flex flex-col h-full justify-center text-center text-transparent transition ease-out duration-500 hover:backdrop-brightness-50 hover:text-white">
                <span className="text-center">{name}</span>
                <span className="text-center font-thin">{position.toUpperCase()}</span>
            </div>
        </div>
    </div>
)

const Newbie: FC<{
    name: string
  }> = ({ name }) => (
      <span className='font-thin'>{name}</span>
  )

const GenerationRoster: FC<{
    number: string
    roster: any[]
    imgPath: string
    }> = ({ number, roster, imgPath }) => (
        <div className='flex flex-col w-full gap-5 text-center items-center'>
            <span className='text-4xl pt-10'>{
                parseInt(number.slice(0,-2)) > 5 ? `${number} generation newbies`.toUpperCase() : `${number} generation`.toUpperCase()
            }
            </span>
            <div className='grid grid-rows-5 grid-flow-col max-w-screen-xl w-full text-center px-60'>
                {Array(roster.length)
                    .fill(0)
                    .map((x, i) => (
                    <Newbie
                        key={roster[i].id}
                        name={roster[i].name}
                        />
                    ))}
            </div>
            <div className='flex w-full justify-center'>
                <Image 
                    src={imgPath}
                    width={800}
                    height={200}
                    alt={`${number} Generation Photoshoot`}
                    />
            </div>
        </div>
    )