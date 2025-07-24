import React, { useState, useEffect } from 'react';
import { 
  Languages, 
  Save, 
  RefreshCw, 
  Search, 
  Edit, 
  Check, 
  X,
  Globe,
  AlertCircle,
  Download,
  Upload
} from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { translations as initialTranslations } from '../../lib/i18n';

const TranslationsManager = () => {
  const { currentLanguage, changeLanguage } = useTranslation();
  const [translations, setTranslations] = useState(initialTranslations);
  const [editingKey, setEditingKey] = useState(null);
  const [editingLang, setEditingLang] = useState(null);
  const [editingValue, setEditingValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [showOnlyMissing, setShowOnlyMissing] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'eu', name: 'Euskera', flag: '🏴' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  // Flatten translations for easier editing
  const flattenTranslations = (obj, prefix = '') => {
    let flattened = {};
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        Object.assign(flattened, flattenTranslations(obj[key], prefix + key + '.'));
      } else {
        flattened[prefix + key] = obj[key];
      }
    }
    return flattened;
  };

  // Get all translation keys
  const getAllKeys = () => {
    const allKeys = new Set();
    languages.forEach(lang => {
      const flattened = flattenTranslations(translations[lang.code] || {});
      Object.keys(flattened).forEach(key => allKeys.add(key));
    });
    return Array.from(allKeys).sort();
  };

  const allKeys = getAllKeys();

  // Filter keys based on search and missing translations
  const filteredKeys = allKeys.filter(key => {
    const matchesSearch = key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      languages.some(lang => {
        const flattened = flattenTranslations(translations[lang.code] || {});
        return (flattened[key] || '').toLowerCase().includes(searchTerm.toLowerCase());
      });

    if (!matchesSearch) return false;

    if (showOnlyMissing) {
      return languages.some(lang => {
        const flattened = flattenTranslations(translations[lang.code] || {});
        return !flattened[key] || flattened[key].trim() === '';
      });
    }

    return true;
  });

  const getTranslationValue = (key, langCode) => {
    const flattened = flattenTranslations(translations[langCode] || {});
    return flattened[key] || '';
  };

  const setTranslationValue = (key, langCode, value) => {
    const newTranslations = { ...translations };
    
    // Navigate to the nested object and set the value
    const keys = key.split('.');
    let current = newTranslations[langCode] = newTranslations[langCode] || {};
    
    for (let i = 0; i < keys.length - 1; i++) {
      current[keys[i]] = current[keys[i]] || {};
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
    
    setTranslations(newTranslations);
    setHasUnsavedChanges(true);
  };

  const handleEdit = (key, langCode) => {
    setEditingKey(key);
    setEditingLang(langCode);
    setEditingValue(getTranslationValue(key, langCode));
  };

  const handleSave = () => {
    if (editingKey && editingLang) {
      setTranslationValue(editingKey, editingLang, editingValue);
    }
    setEditingKey(null);
    setEditingLang(null);
    setEditingValue('');
  };

  const handleCancel = () => {
    setEditingKey(null);
    setEditingLang(null);
    setEditingValue('');
  };

  const saveAllChanges = () => {
    // In a real application, this would save to a backend
    localStorage.setItem('mugixor-translations', JSON.stringify(translations));
    setHasUnsavedChanges(false);
    
    // Update the global translations
    window.dispatchEvent(new CustomEvent('translationsUpdated', { detail: translations }));
    
    alert('Translations saved successfully!');
  };

  const resetTranslations = () => {
    if (window.confirm('Are you sure you want to reset all translations to default? This will lose all your changes.')) {
      setTranslations(initialTranslations);
      setHasUnsavedChanges(false);
      localStorage.removeItem('mugixor-translations');
    }
  };

  const exportTranslations = () => {
    const dataStr = JSON.stringify(translations, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'mugixor-translations.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const importTranslations = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedTranslations = JSON.parse(e.target.result);
          setTranslations(importedTranslations);
          setHasUnsavedChanges(true);
          alert('Translations imported successfully!');
        } catch (error) {
          alert('Error importing translations: Invalid JSON file');
        }
      };
      reader.readAsText(file);
    }
  };

  const getMissingTranslationsCount = () => {
    let count = 0;
    allKeys.forEach(key => {
      languages.forEach(lang => {
        const value = getTranslationValue(key, lang.code);
        if (!value || value.trim() === '') {
          count++;
        }
      });
    });
    return count;
  };

  const getCompletionPercentage = (langCode) => {
    const totalKeys = allKeys.length;
    const translatedKeys = allKeys.filter(key => {
      const value = getTranslationValue(key, langCode);
      return value && value.trim() !== '';
    }).length;
    
    return totalKeys > 0 ? Math.round((translatedKeys / totalKeys) * 100) : 0;
  };

  // Load saved translations on component mount
  useEffect(() => {
    const savedTranslations = localStorage.getItem('mugixor-translations');
    if (savedTranslations) {
      try {
        setTranslations(JSON.parse(savedTranslations));
      } catch (error) {
        console.error('Error loading saved translations:', error);
      }
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Translations Management</h2>
        <div className="flex space-x-2">
          <input
            type="file"
            accept=".json"
            onChange={importTranslations}
            className="hidden"
            id="import-translations"
          />
          <label
            htmlFor="import-translations"
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
          >
            <Upload className="w-4 h-4" />
            <span>Import</span>
          </label>
          <button
            onClick={exportTranslations}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button
            onClick={resetTranslations}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reset</span>
          </button>
          <button
            onClick={saveAllChanges}
            disabled={!hasUnsavedChanges}
            className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-4 h-4" />
            <span>Save All</span>
          </button>
        </div>
      </div>

      {hasUnsavedChanges && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
            <p className="text-yellow-800">You have unsaved changes. Don't forget to save your work!</p>
          </div>
        </div>
      )}

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <Globe className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-600">Total Keys</p>
              <p className="text-2xl font-bold text-gray-900">{allKeys.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <Languages className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-600">Languages</p>
              <p className="text-2xl font-bold text-gray-900">{languages.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <AlertCircle className="w-8 h-8 text-red-500 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-600">Missing</p>
              <p className="text-2xl font-bold text-gray-900">{getMissingTranslationsCount()}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <Check className="w-8 h-8 text-teal-500 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-600">Completion</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(((allKeys.length * languages.length - getMissingTranslationsCount()) / (allKeys.length * languages.length)) * 100)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Language Completion */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Language Completion</h3>
        <div className="space-y-3">
          {languages.map(lang => {
            const completion = getCompletionPercentage(lang.code);
            return (
              <div key={lang.code} className="flex items-center">
                <div className="flex items-center w-32">
                  <span className="text-lg mr-2">{lang.flag}</span>
                  <span className="text-sm font-medium text-gray-700">{lang.name}</span>
                </div>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        completion === 100 ? 'bg-green-500' : 
                        completion >= 80 ? 'bg-blue-500' : 
                        completion >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${completion}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-600 w-12 text-right">
                  {completion}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search translations..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            <option value="all">All Languages</option>
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="show-missing"
              checked={showOnlyMissing}
              onChange={(e) => setShowOnlyMissing(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="show-missing" className="text-sm font-medium text-gray-700">
              Show only missing translations
            </label>
          </div>
        </div>
      </div>

      {/* Translations Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Translation Key
                </th>
                {languages.map(lang => (
                  <th key={lang.code} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      <span className="mr-1">{lang.flag}</span>
                      {lang.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredKeys.map((key) => (
                <tr key={key} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{key}</div>
                  </td>
                  {languages.map(lang => {
                    const value = getTranslationValue(key, lang.code);
                    const isEditing = editingKey === key && editingLang === lang.code;
                    const isEmpty = !value || value.trim() === '';
                    
                    if (selectedLanguage !== 'all' && selectedLanguage !== lang.code) {
                      return null;
                    }
                    
                    return (
                      <td key={lang.code} className="px-6 py-4">
                        {isEditing ? (
                          <div className="flex items-center space-x-2">
                            <textarea
                              value={editingValue}
                              onChange={(e) => setEditingValue(e.target.value)}
                              className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm resize-none"
                              rows={2}
                              autoFocus
                            />
                            <button
                              onClick={handleSave}
                              className="text-green-600 hover:text-green-700"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button
                              onClick={handleCancel}
                              className="text-red-600 hover:text-red-700"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center group">
                            <div className={`flex-1 text-sm ${isEmpty ? 'text-red-500 italic' : 'text-gray-900'}`}>
                              {isEmpty ? 'Missing translation' : value}
                            </div>
                            <button
                              onClick={() => handleEdit(key, lang.code)}
                              className="ml-2 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-opacity"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredKeys.length === 0 && (
        <div className="text-center py-12">
          <Languages className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No translations found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default TranslationsManager;

