import React, { useState, useRef } from 'react';
import { 
  Upload, 
  Image as ImageIcon, 
  Trash2, 
  Download, 
  Search,
  Grid,
  List,
  Eye,
  Edit,
  Copy,
  Check
} from 'lucide-react';

const ImagesManager = () => {
  const [images, setImages] = useState([
    { id: 1, name: 'urban-eco-bike-1.jpg', url: '/images/urban-eco-bike-1.jpg', size: '245 KB', type: 'Product Image', uploadDate: '2025-01-15' },
    { id: 2, name: 'smart-pro-scooter-1.jpg', url: '/images/smart-pro-scooter-1.jpg', size: '198 KB', type: 'Product Image', uploadDate: '2025-01-15' },
    { id: 3, name: 'cargo-master-xl-1.jpg', url: '/images/cargo-master-xl-1.jpg', size: '267 KB', type: 'Product Image', uploadDate: '2025-01-15' },
    { id: 4, name: 'electric-skateboard-x-1.jpg', url: '/images/electric-skateboard-x-1.jpg', size: '189 KB', type: 'Product Image', uploadDate: '2025-01-15' },
    { id: 5, name: 'mugixor-logo.jpg', url: '/src/assets/mugixor-logo.jpg', size: '45 KB', type: 'Logo', uploadDate: '2025-01-15' },
    { id: 6, name: 'basque-flag.jpg', url: '/src/assets/basque-flag.jpg', size: '12 KB', type: 'Flag', uploadDate: '2025-01-15' }
  ]);
  
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedImages, setSelectedImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(null);
  const fileInputRef = useRef(null);

  const imageTypes = [
    { id: 'all', label: 'All Images' },
    { id: 'Product Image', label: 'Product Images' },
    { id: 'Logo', label: 'Logos' },
    { id: 'Flag', label: 'Flags' },
    { id: 'Banner', label: 'Banners' }
  ];

  const filteredImages = images.filter(image => {
    const matchesSearch = image.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || image.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleFileUpload = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    setIsUploading(true);

    // Simulate file upload process
    for (const file of files) {
      const newImage = {
        id: Date.now() + Math.random(),
        name: file.name,
        url: URL.createObjectURL(file),
        size: `${Math.round(file.size / 1024)} KB`,
        type: 'Product Image',
        uploadDate: new Date().toISOString().split('T')[0]
      };

      setImages(prev => [...prev, newImage]);
      
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    setIsUploading(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDelete = (imageId) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      setImages(images.filter(img => img.id !== imageId));
      setSelectedImages(selectedImages.filter(id => id !== imageId));
    }
  };

  const handleBulkDelete = () => {
    if (selectedImages.length === 0) return;
    
    if (window.confirm(`Are you sure you want to delete ${selectedImages.length} selected images?`)) {
      setImages(images.filter(img => !selectedImages.includes(img.id)));
      setSelectedImages([]);
    }
  };

  const handleSelectImage = (imageId) => {
    setSelectedImages(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  const handleSelectAll = () => {
    if (selectedImages.length === filteredImages.length) {
      setSelectedImages([]);
    } else {
      setSelectedImages(filteredImages.map(img => img.id));
    }
  };

  const copyImageUrl = (url) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const updateImageType = (imageId, newType) => {
    setImages(images.map(img => 
      img.id === imageId ? { ...img, type: newType } : img
    ));
  };

  const GridView = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {filteredImages.map((image) => (
        <div key={image.id} className="relative group bg-white rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
            <img
              src={image.url}
              alt={image.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBMMTMwIDEwMEg3MEwxMDAgNzBaIiBmaWxsPSIjOUI5QkEwIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNDAiIHN0cm9rZT0iIzlCOUJBMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUI5QkEwIiBmb250LXNpemU9IjEyIj5JbWFnZTwvdGV4dD4KPC9zdmc+';
              }}
            />
          </div>
          
          {/* Selection checkbox */}
          <div className="absolute top-2 left-2">
            <input
              type="checkbox"
              checked={selectedImages.includes(image.id)}
              onChange={() => handleSelectImage(image.id)}
              className="w-4 h-4 text-teal-600 bg-white border-gray-300 rounded focus:ring-teal-500"
            />
          </div>

          {/* Actions overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg flex items-center justify-center space-x-2">
            <button
              onClick={() => copyImageUrl(image.url)}
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
              title="Copy URL"
            >
              {copiedUrl === image.url ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4 text-gray-600" />
              )}
            </button>
            <button
              onClick={() => window.open(image.url, '_blank')}
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
              title="View Full Size"
            >
              <Eye className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={() => handleDelete(image.id)}
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
              title="Delete"
            >
              <Trash2 className="w-4 h-4 text-red-600" />
            </button>
          </div>

          {/* Image info */}
          <div className="p-3">
            <h3 className="text-sm font-medium text-gray-900 truncate" title={image.name}>
              {image.name}
            </h3>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-gray-500">{image.size}</span>
              <select
                value={image.type}
                onChange={(e) => updateImageType(image.id, e.target.value)}
                className="text-xs border-none bg-transparent text-gray-600 focus:ring-0 p-0"
              >
                {imageTypes.slice(1).map(type => (
                  <option key={type.id} value={type.id}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedImages.length === filteredImages.length && filteredImages.length > 0}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-teal-600 bg-white border-gray-300 rounded focus:ring-teal-500"
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Size
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Upload Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredImages.map((image) => (
              <tr key={image.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedImages.includes(image.id)}
                    onChange={() => handleSelectImage(image.id)}
                    className="w-4 h-4 text-teal-600 bg-white border-gray-300 rounded focus:ring-teal-500"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded object-cover"
                        src={image.url}
                        alt={image.name}
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAxNEwyNiAyMEgxNEwyMCAxNFoiIGZpbGw9IiM5QjlCQTAiLz4KPC9zdmc+';
                        }}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{image.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={image.type}
                    onChange={(e) => updateImageType(image.id, e.target.value)}
                    className="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    {imageTypes.slice(1).map(type => (
                      <option key={type.id} value={type.id}>{type.label}</option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {image.size}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {image.uploadDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => copyImageUrl(image.url)}
                      className="text-teal-600 hover:text-teal-900"
                      title="Copy URL"
                    >
                      {copiedUrl === image.url ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={() => window.open(image.url, '_blank')}
                      className="text-blue-600 hover:text-blue-900"
                      title="View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(image.id)}
                      className="text-red-600 hover:text-red-900"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Images Management</h2>
        <div className="flex space-x-2">
          {selectedImages.length > 0 && (
            <button
              onClick={handleBulkDelete}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>Delete Selected ({selectedImages.length})</span>
            </button>
          )}
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors disabled:opacity-50"
          >
            <Upload className="w-4 h-4" />
            <span>{isUploading ? 'Uploading...' : 'Upload Images'}</span>
          </button>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Filters and View Controls */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search images..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              {imageTypes.map(type => (
                <option key={type.id} value={type.id}>{type.label}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">
              {filteredImages.length} images
            </span>
            <div className="flex border border-gray-300 rounded-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-teal-100 text-teal-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-teal-100 text-teal-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Images Display */}
      {filteredImages.length === 0 ? (
        <div className="text-center py-12">
          <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No images found</h3>
          <p className="mt-1 text-sm text-gray-500">
            {searchTerm || selectedType !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'Get started by uploading some images.'
            }
          </p>
        </div>
      ) : (
        viewMode === 'grid' ? <GridView /> : <ListView />
      )}
    </div>
  );
};

export default ImagesManager;

