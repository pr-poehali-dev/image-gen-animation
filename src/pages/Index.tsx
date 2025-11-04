import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analyzedDescription, setAnalyzedDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/projects/0daeba9a-5f82-40f1-9a27-cb320d3c0404/files/bda6fc1e-a68d-44c1-8c0f-d4bd551f70e8.jpg',
      title: 'Анимированный персонаж',
      category: 'character'
    },
    {
      url: 'https://cdn.poehali.dev/projects/0daeba9a-5f82-40f1-9a27-cb320d3c0404/files/cc7caa92-2ae6-4e52-91c0-bd81a4c722b7.jpg',
      title: 'Магический пейзаж',
      category: 'landscape'
    },
    {
      url: 'https://cdn.poehali.dev/projects/0daeba9a-5f82-40f1-9a27-cb320d3c0404/files/9b2cd55c-0771-40c4-8c19-4a593fe555ee.jpg',
      title: 'Геометрический дизайн',
      category: 'abstract'
    }
  ];

  const features = [
    {
      icon: 'Sparkles',
      title: 'AI Генерация',
      description: 'Создавай уникальные изображения с помощью нейросети'
    },
    {
      icon: 'Play',
      title: 'Анимация',
      description: 'Оживляй персонажей и создавай движение'
    },
    {
      icon: 'Palette',
      title: 'Графический дизайн',
      description: 'Профессиональные инструменты для творчества'
    },
    {
      icon: 'Image',
      title: 'Галерея работ',
      description: 'Сохраняй и делись своими шедеврами'
    }
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyzeImage = async () => {
    if (!uploadedImage) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      const descriptions = [
        'Яркий мультяшный персонаж с большими глазами на градиентном фоне от фиолетового к оранжевому',
        'Магический пейзаж с парящими островами, фиолетово-синее небо, сказочная атмосфера',
        'Абстрактный геометрический дизайн персонажа, яркие оранжевые и розовые цвета, минимализм'
      ];
      setAnalyzedDescription(descriptions[Math.floor(Math.random() * descriptions.length)]);
      setPrompt(descriptions[Math.floor(Math.random() * descriptions.length)]);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedImage(galleryImages[Math.floor(Math.random() * galleryImages.length)].url);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-purple-100 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              CreativeAI
            </h1>
          </div>
          <div className="hidden md:flex gap-8">
            <button 
              onClick={() => setActiveSection('home')}
              className={`font-medium transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
            >
              Главная
            </button>
            <button 
              onClick={() => setActiveSection('generator')}
              className={`font-medium transition-colors ${activeSection === 'generator' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
            >
              Генератор
            </button>
            <button 
              onClick={() => setActiveSection('animation')}
              className={`font-medium transition-colors ${activeSection === 'animation' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
            >
              Анимация
            </button>
            <button 
              onClick={() => setActiveSection('gallery')}
              className={`font-medium transition-colors ${activeSection === 'gallery' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
            >
              Галерея
            </button>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Icon name="Zap" size={18} className="mr-2" />
            Начать
          </Button>
        </div>
      </nav>

      <main className="pt-20">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            <section className="container mx-auto px-6 py-20 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Создавай магию с AI
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                  Превращай идеи в визуальные шедевры. Генерируй изображения, создавай анимацию, оживляй персонажей с помощью нейросети
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8"
                    onClick={() => setActiveSection('generator')}
                  >
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Создать изображение
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8"
                    onClick={() => setActiveSection('gallery')}
                  >
                    <Icon name="Image" size={20} className="mr-2" />
                    Смотреть галерею
                  </Button>
                </div>
              </div>
            </section>

            <section className="container mx-auto px-6 py-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, idx) => (
                  <Card 
                    key={idx} 
                    className="border-2 border-purple-100 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                        <Icon name={feature.icon as any} size={32} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="container mx-auto px-6 py-16">
              <h3 className="text-4xl font-bold text-center mb-12">Примеры работ</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {galleryImages.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="group relative overflow-hidden rounded-2xl aspect-square animate-float"
                    style={{ animationDelay: `${idx * 200}ms` }}
                  >
                    <img 
                      src={img.url} 
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h4 className="text-xl font-bold mb-1">{img.title}</h4>
                        <p className="text-sm text-gray-300 capitalize">{img.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeSection === 'generator' && (
          <div className="container mx-auto px-6 py-16 animate-fade-in">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Генератор изображений
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Загрузи картинку → AI опишет её → создай новое изображение
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-purple-100 p-6">
                  <CardContent className="space-y-4 p-0">
                    <h3 className="text-xl font-bold">Шаг 1: Загрузи картинку</h3>
                    
                    {!uploadedImage ? (
                      <label className="border-2 border-dashed border-purple-300 rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer block">
                        <Icon name="Upload" size={40} className="mx-auto mb-3 text-primary" />
                        <p className="text-gray-600 mb-2">Загрузи изображение</p>
                        <p className="text-sm text-gray-400">JPG, PNG до 10MB</p>
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </label>
                    ) : (
                      <div className="space-y-4">
                        <div className="relative rounded-xl overflow-hidden border-2 border-purple-200">
                          <img src={uploadedImage} alt="Uploaded" className="w-full" />
                          <button
                            onClick={() => {
                              setUploadedImage(null);
                              setAnalyzedDescription('');
                              setPrompt('');
                            }}
                            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                          >
                            <Icon name="X" size={16} />
                          </button>
                        </div>

                        <Button 
                          onClick={handleAnalyzeImage}
                          disabled={isAnalyzing}
                          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                        >
                          {isAnalyzing ? (
                            <>
                              <Icon name="Loader2" size={18} className="mr-2 animate-spin" />
                              Анализирую...
                            </>
                          ) : (
                            <>
                              <Icon name="Eye" size={18} className="mr-2" />
                              Распознать изображение
                            </>
                          )}
                        </Button>

                        {analyzedDescription && (
                          <div className="bg-purple-50 p-4 rounded-lg animate-scale-in">
                            <p className="text-sm font-medium mb-1 text-primary">AI видит:</p>
                            <p className="text-gray-700">{analyzedDescription}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-100 p-6">
                  <CardContent className="space-y-4 p-0">
                    <h3 className="text-xl font-bold">Шаг 2: Создай новое</h3>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Промпт для генерации</label>
                      <Textarea 
                        placeholder="Опиши что хочешь создать или отредактируй описание выше..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="min-h-32 resize-none"
                      />
                    </div>
                    
                    <Button 
                      onClick={handleGenerate}
                      disabled={isGenerating || !prompt.trim()}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6"
                    >
                      {isGenerating ? (
                        <>
                          <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                          Генерирую магию...
                        </>
                      ) : (
                        <>
                          <Icon name="Sparkles" size={20} className="mr-2" />
                          Создать изображение
                        </>
                      )}
                    </Button>

                    {generatedImage && (
                      <div className="animate-scale-in space-y-3">
                        <h4 className="font-semibold">Результат:</h4>
                        <div className="relative rounded-xl overflow-hidden border-2 border-purple-200">
                          <img 
                            src={generatedImage} 
                            alt="Generated" 
                            className="w-full"
                          />
                        </div>
                        <div className="flex gap-3">
                          <Button variant="outline" className="flex-1">
                            <Icon name="Download" size={16} className="mr-2" />
                            Скачать
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Icon name="Share2" size={16} className="mr-2" />
                            Поделиться
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'animation' && (
          <div className="container mx-auto px-6 py-16 animate-fade-in">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Анимация персонажей
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Оживляй персонажей и создавай движение с помощью AI
              </p>

              <Tabs defaultValue="upload" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="upload">Загрузить персонажа</TabsTrigger>
                  <TabsTrigger value="examples">Готовые примеры</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upload" className="animate-fade-in">
                  <Card className="border-2 border-purple-100 p-8">
                    <CardContent className="p-0">
                      <div className="border-2 border-dashed border-purple-300 rounded-xl p-12 text-center hover:border-primary transition-colors cursor-pointer">
                        <Icon name="Upload" size={48} className="mx-auto mb-4 text-primary" />
                        <h3 className="text-xl font-semibold mb-2">Загрузи изображение персонажа</h3>
                        <p className="text-gray-600 mb-4">PNG, JPG до 10MB</p>
                        <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                          Выбрать файл
                        </Button>
                      </div>

                      <div className="mt-8 space-y-4">
                        <h4 className="font-semibold">Настройки анимации:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Тип движения</label>
                            <select className="w-full border border-input rounded-md p-2">
                              <option>Ходьба</option>
                              <option>Бег</option>
                              <option>Прыжок</option>
                              <option>Танец</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Скорость</label>
                            <select className="w-full border border-input rounded-md p-2">
                              <option>Медленная</option>
                              <option>Нормальная</option>
                              <option>Быстрая</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="examples" className="animate-fade-in">
                  <div className="grid md:grid-cols-3 gap-6">
                    {galleryImages.map((img, idx) => (
                      <Card key={idx} className="border-2 border-purple-100 hover:border-primary transition-all hover:scale-105 cursor-pointer group">
                        <CardContent className="p-4">
                          <div className="relative overflow-hidden rounded-lg mb-3 aspect-square">
                            <img 
                              src={img.url} 
                              alt={img.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Icon name="Play" size={48} className="text-white" />
                            </div>
                          </div>
                          <h4 className="font-semibold">{img.title}</h4>
                          <p className="text-sm text-gray-600">Анимация доступна</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="container mx-auto px-6 py-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Галерея работ
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Вдохновляйся работами сообщества и создавай свои шедевры
            </p>

            <div className="flex gap-4 justify-center mb-12 flex-wrap">
              <Button variant="outline" className="border-2 border-primary text-primary">
                Все работы
              </Button>
              <Button variant="ghost">Персонажи</Button>
              <Button variant="ghost">Пейзажи</Button>
              <Button variant="ghost">Абстракция</Button>
              <Button variant="ghost">Анимация</Button>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...galleryImages, ...galleryImages, ...galleryImages].map((img, idx) => (
                <div 
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer animate-scale-in hover:scale-105 transition-transform"
                  style={{ animationDelay: `${(idx % 6) * 50}ms` }}
                >
                  <img 
                    src={img.url} 
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-4 w-full">
                      <h4 className="text-white font-bold mb-1">{img.title}</h4>
                      <div className="flex items-center gap-4 text-white/80 text-sm">
                        <span className="flex items-center gap-1">
                          <Icon name="Heart" size={14} />
                          {Math.floor(Math.random() * 500) + 100}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Eye" size={14} />
                          {Math.floor(Math.random() * 2000) + 500}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-purple-100 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary via-secondary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={18} className="text-white" />
                </div>
                <span className="font-bold text-xl">CreativeAI</span>
              </div>
              <p className="text-gray-600 text-sm">
                Платформа для создания визуального контента с помощью искусственного интеллекта
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Обучение</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-100 mt-8 pt-8 text-center text-gray-600 text-sm">
            © 2024 CreativeAI. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;