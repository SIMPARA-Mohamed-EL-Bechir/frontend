import React, { useState } from 'react';
import './Facteur.css';

export default function Facteur() {
    const [formData, setFormData] = useState({
        age: '',
        familyHistory: '',
        geneticMutations: '',
        radiationExposure: '',
        reproductiveHistory: '',
        breastDensity: '',
        alcoholConsumption: '',
        obesity: ''
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez votre logique d'analyse ou de prédiction ici
        const riskScore = calculateRiskScore(formData);
        setResult(riskScore);
    };

    const calculateRiskScore = (data) => {
        // Exemple de logique d'analyse simple
        let score = 0;
        if (data.age > 50) score += 2;
        if (data.familyHistory === 'yes') score += 3;
        if (data.geneticMutations === 'yes') score += 4;
        if (data.radiationExposure === 'yes') score += 2;
        if (data.reproductiveHistory === 'yes') score += 1;
        if (data.breastDensity === 'high') score += 3;
        if (data.alcoholConsumption === 'yes') score += 1;
        if (data.obesity === 'yes') score += 2;
        
        return score > 5 ? 'High Risk' : 'Low Risk';
    };

    return (
        <div className="form-container">
            <h2>Breast Cancer Risk Assessment</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Age:
                    <input type="number" name="age" value={formData.age} onChange={handleChange} />
                </label>
                <label>
                    Family history of breast cancer:
                    <select name="familyHistory" value={formData.familyHistory} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </label>
                <label>
                    Known genetic mutations (BRCA1/BRCA2):
                    <select name="geneticMutations" value={formData.geneticMutations} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </label>
                <label>
                    Previous radiation therapy to the chest:
                    <select name="radiationExposure" value={formData.radiationExposure} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </label>
                <label>
                    Reproductive history (early menstruation, late menopause):
                    <select name="reproductiveHistory" value={formData.reproductiveHistory} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </label>
                <label>
                    Breast density:
                    <select name="breastDensity" value={formData.breastDensity} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </label>
                <label>
                    Alcohol consumption:
                    <select name="alcoholConsumption" value={formData.alcoholConsumption} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </label>
                <label>
                    Obesity:
                    <select name="obesity" value={formData.obesity} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
            {result && (
                <div className="result">
                    <h3>Result: {result}</h3>
                </div>
            )}
        </div>
    );
}
