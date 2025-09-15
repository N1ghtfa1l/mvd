import { useState, useEffect } from "react";
import styles from "./CitizenPage.module.css";
import { CITIZEN_CONTENT } from "../../../shared/consts";
import type { ICitizineContent } from "../../../shared/types";


export const CitizenPage = () => {
    const [data, setData] = useState<ICitizineContent[]>(CITIZEN_CONTENT);

    useEffect(() => {
        const saved = localStorage.getItem("citizens");
        if (saved) {
            setData(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        if (JSON.stringify(data) === JSON.stringify(CITIZEN_CONTENT)) return
        localStorage.setItem("citizens", JSON.stringify(data));
    }, [data]);

    const handleChange = (
        index: number,
        field: keyof ICitizineContent,
        value: string | number
    ) => {
        const updated = [...data];
        updated[index] = {
            ...updated[index],
            [field]: field === "number" ? Number(value) : value
        };
        setData(updated);
    };


    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                График приема граждан руководящим составом МВД России
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Должность</th>
                        <th>ФИО</th>
                        <th>День недели</th>
                        <th>№</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="text"
                                    value={row.position}
                                    onChange={(e) =>
                                        handleChange(index, "position", e.target.value)
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.name}
                                    onChange={(e) => handleChange(index, "name", e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.day}
                                    onChange={(e) => handleChange(index, "day", e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    className={styles.number}
                                    type="number"
                                    value={row.number}
                                    onChange={(e) =>
                                        handleChange(index, "number", e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
