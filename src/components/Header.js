import Vid from "./Vid.MP4"

const Header = () => {
    return (
        <div>
            <video className="video" src={Vid} autoPlay loop muted />
            <div className="content">
                <h1>ANDOLITOS</h1>
            </div>
            <div>
                <h2 className="main-text">Animal instinct is to protect one's food and not to share. Ever toss bread to birds or watch a dog eating from his bowl snap at any other dog daring to come close? Humans can prove their evolution through the sharing of food. Sharing food demonstrates investment in the survival of those being shared with. The prime example is parents providing nutritious food for their children to become healthy and strong. Everyone eats, thus "breaking bread" is something everyone can take part in no matter their religion, caste, color, creed, age, gender or social status. When eating together, people become equals. Sharing food provides an opportunity to spend time sharing stories, discussing politics, and gossiping. As drinks are poured, their are opportunities to make toasts honoring accomplishment and celebrating successes. Courting often revolves around food… men buying meals for women, families having suitors for dinner to meet their daughter, etc Eating food that another has prepared is a way of expressing vulnerability, as you must trust that the food they are providing you is not poisonous. When vulnerability is validated trust is strengthened between people.

                    Side story about sharing food…After many years of attending Burning Man (an event in the desert where people practice radical self-reliance) I noticed a pattern: people would pack way more food than they needed, but horde it for the first few days of the week-long event… then begin to offer food liberally towards the end of the week when they realized how much extra food they had. Based upon this observation, the following years I packed only enough food to last the first few days of the event and shared my food with my campmates. Like clockwork, because I had shared early in the week… I was able to enjoy delicious meals throughout the end of the event as those around me began to unload their stashes.
                </h2>
            </div>
        </div>
    )
}

export default Header