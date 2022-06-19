import { useState } from "react"
import { Header } from "../components/header-menu/Header"
import { MentorSearch } from "../components/mentor-search/MentorSearch"
import { SearchField } from "../components/SearchField"

export const Mentors = () => {
    const [searchQuery, setSearchQuery] = useState<string>('')

    return <>
        <Header />
        <SearchField onChange={(value) => setSearchQuery(value)} value={searchQuery} />
        <MentorSearch query={searchQuery} />
    </>
}