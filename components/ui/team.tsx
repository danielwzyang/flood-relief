import TeamCard from "@/components/ui/teamcard"
import placeholder from "../../assets/profile.png"
import daniel from "../../assets/daniel.png"

export default function Team() {
    return (<>
        <h1 className="text-center mt-10 text-2xl ">Our Team</h1>
        <div className="my-5 flex flex-wrap w-fit justify-center mx-auto gap-5">
            <TeamCard
                name="Junghoon Yu"
                position="president"
                bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti fugit sit dolores aperiam doloribus explicabo laborum cupiditate sequi perspiciatis?"
                facebook="Junghoon Yu"
                instagram="yungyooon"
                mail="jhoony9960@gmail.com"
                image={placeholder}
            />
            <TeamCard
                name="Seoyeon Yu"
                position="vice president"
                bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti fugit sit dolores aperiam doloribus explicabo laborum cupiditate sequi perspiciatis?"
                facebook="Seoyeon Yu"
                instagram="shkoyeon"
                mail="seoyeonyu0412@gmail.com"
                image={placeholder}
            />
            <TeamCard
                name="Thomas Choi"
                position="vice president"
                bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti fugit sit dolores aperiam doloribus explicabo laborum cupiditate sequi perspiciatis?"
                facebook="Thomas Choi"
                instagram="thomas._.cho1"
                mail="thomaschoi9080@gmail.com"
                image={placeholder}
            />
            <TeamCard
                name="Ethan Pak"
                position="financial director"
                bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti fugit sit dolores aperiam doloribus explicabo laborum cupiditate sequi perspiciatis?"
                facebook=":("
                instagram="eethanp_"
                mail=":("
                image={placeholder}
            />
            <TeamCard
                name="Daniel Yang"
                position="it director"
                bio="My hobbies are photography and programming. I like to collect figurines, and my favorite movie is Good Will Hunting."
                facebook="Daniel Yang"
                instagram="@danielwzyang"
                mail="danielwzyang@gmail.com"
                image={daniel}
            />
        </div>
        </>)
}