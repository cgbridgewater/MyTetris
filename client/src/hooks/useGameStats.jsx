import { useState, useCallback } from "react";

const buildGameStats = () => ({
    level:1,
    linesCompleted:0,
    linesPerLevel:10,
    points:0,
    totalLines:0
});

export const useGameStats = () => {
    const [gameStats,setGameStats] = useState(buildGameStats());

    const addLinesCleared = useCallback((lines) => { 
        setGameStats((previous) => {
            const points = lines===4 ? previous.points + ((lines * 100) * lines + 1000) :previous.points + ((lines * 100) * lines); //points multiplier
            const { linesPerLevel } = previous;
            const newLinesCompleted = previous.linesCompleted + lines;
            const level = newLinesCompleted >= linesPerLevel ? previous.level + 1 : previous.level;
            const linesCompleted = newLinesCompleted % linesPerLevel;
            const totalLines =+ linesCompleted + ((level *10)-10)

            return{
                level,
                linesCompleted,
                linesPerLevel,
                points,
                totalLines
            };
        }, [])
    },[])

    return [gameStats, addLinesCleared];
}