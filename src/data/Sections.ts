import Intro from "../views/Intro"
import Experience from "../views/Experience"

interface sections {
    id: number,
    title: string,
    description: string,
    component: React.ComponentType
}

export const Sections: sections[] = [
    { id: 1, title: 'Intro', description: 'A little description about me', component: Intro },
    { id: 2, title: 'Test', description: 'Test description aklsjdaksjdkljaskdja alksdnas sndlaknsd', component: Experience },
    { id: 3, title: 'Test', description: 'Test description 2', component: Intro },
    { id: 3, title: 'Test', description: 'Test description 2', component: Intro },
    { id: 3, title: 'Test', description: 'Test description 2', component: Intro },
    { id: 3, title: 'Test', description: 'Test description 2', component: Intro },
    { id: 3, title: 'Test', description: 'Test description 2', component: Intro },
]