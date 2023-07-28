import { FC } from 'react'

export default function AboutUs() {
  return (
    <div className='flex flex-col gap-10 p-24'>
      {Array(2)
        .fill(0)
        .map((x, i) => (
          <Section
            key={content[i].id}
            title={content[i].sectionTitle}
            content={content[i].sectionContent}
          />
        ))}
      <div className="flex flex-col gap-5">
        <span className="text-2xl font-semibold">{`11th generation faqs`.toUpperCase()}</span>

        <span className="text-xl">Will you be having auditions for 11th Generation?</span>
        <span className="text-xl font-thin">
          {`Unfortunately, due to the Covid-19 pandemic, we will not be having auditions for 11th Generation this 2020 Fall Quarter.
          We hope to continue updating all interested dancers throughout the 2020-2021 academic year about our plans for URMO's following season.`}
        </span>
        
        
        <span className="text-2xl font-semibold">{`general faqs`.toUpperCase()}</span>
        
        {Array(6)
          .fill(0)
          .map((x, i) => (
            <QuestionAndAnswer
              key={generalQuestions[i].id}
              question={generalQuestions[i].question}
              answer={generalQuestions[i].answer}
            />
          ))}
      </div>
    </div>
  )
}

const content = [
  {
    id: 0,
    sectionTitle: "mission statement",
    sectionContent: `Unique Representation of Movement (URMO) is a family dedicated to growth and individual expression through movement. Our goal is to uphold 
    the history of dance culture and our team’s passion for artistry in an inclusive space to foster the purest representation of ourselves.`
  },
  {
    id: 1,
    sectionTitle: "history",
    sectionContent: `URMO (formerly Urban Motus) is an exhibition dance team based at the University of California, Irvine, founded in 2010 by Benjamin Lee, Jessica Lee, and Jeffrey Jin. 
    For the last 10 generations, URMO has been part of the Irvine Dance Community, creating and sharing our passion for dance with others. Our team strives to create a 
    space for dancers of all experience levels to hone their craft and find new opportunities to train, grow, explore, and most of all, have fun!`
  },
  {
    id: 2,
    sectionTitle: "frequently asked questions",
    sectionContent: ""
  },
]

const generalQuestions = [
  {
    id: 0,
    question: `Do you need dance experience to audition?`,
    answer: `URMO welcomes dancers of all experience levels, even those with no prior dance experience.`,
  },
  {
    id: 1,
    question: `Where and when are practices?`,
    answer: `Practices are on UCI Campus on Tuesdays/Wednesdays @9PM and Sundays @7PM`,
  },
  {
    id: 2,
    question: `What performances does URMO participate in?`,
    answer: `URMO performs in various UCI events and participates in competitions such as TET Festival and OC Night Market.`,
  },
  {
    id: 3,
    question: `What dance styles does URMO focus on?`,
    answer: `URMO focuses on a variety of dance styles including (but not limited to) open, hip-hop, R&B, isolations, femme, etc. We expose our dancers to several different styles to encourage their growth and versatility.`,
  },
  {
    id: 4,
    question: `How do auditions work?`,
    answer: `On audition day, after learning 2-3 pieces at our audition workshops, auditionees will perform one run through each of the pieces taught. There are no group rounds, but there will be an optional freestyle cypher at the end of auditions. (This is your opportunity to show us your talents!)`,
  },
  {
    id: 5,
    question: `What should I bring to auditions?`,
    answer: `Make sure to bring a completed application, audition fee, water (stay hydrated!), good vibes, and of course, yourself!`,
  },
]

const Section: FC<{
  title: string
  content: string
}> = ({ title, content }) => (
  <div className="flex flex-col gap-5 width-full">
    <span className='text-center text-3xl'>{title.toUpperCase()}</span>
    <span className="text-xl font-thin">{content}</span>
    
  </div>
)

const QuestionAndAnswer: FC<{
  question: string
  answer: string
}> = ({ question, answer }) => (
  <div className="flex flex-col gap-5 width-full text-xl">
    <span>{`Q: ${question}`}</span>
    <span className='font-thin'>{`A: ${answer}`}</span>
    
  </div>
)