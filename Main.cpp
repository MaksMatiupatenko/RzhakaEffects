#pragma once
#include <SFML/Graphics.hpp>
#include <iostream>

sf::Vector2f resolution(800, 600);

int main() {
    sf::RenderWindow window(sf::VideoMode(resolution.x, resolution.y), "window");

    sf::Image image;
    std::string imageName;
    std::cout << "Enter image name:\n";
    std::cin >> imageName;
    if (!image.loadFromFile("Images/" + imageName)) {
        std::cout << "|ERROR| image not found\n";
        exit(-1);
    }

    sf::Texture imageTexture;
    imageTexture.loadFromImage(image);

    sf::Shader effect;
    std::string effectName;
    std::cout << "Enter effect name:\n";
    std::cin >> effectName;
    if (!effect.loadFromFile("Shaders/" + effectName, sf::Shader::Fragment)) {
        std::cout << "|ERROR| shader not found\n";
        exit(-1);
    }


    if (effectName == "gamma.frag") {
        float gamma = 1.0f;
        std::cout << "Enter gamma:\n";
        std::cin >> gamma;
        effect.setUniform("gamma", gamma);
    }

    effect.setUniform("resolution", resolution);
    effect.setUniform("image", imageTexture);

    sf::Clock clock;
    float fullTime = 0.0f;
    while (window.isOpen()) {
        float time = clock.restart().asSeconds();
        fullTime += time;

        sf::Event event;
        while (window.pollEvent(event)) {
            if (event.type == sf::Event::Closed) {
                window.close();
            }
        }

        sf::RenderTexture renderTexture;
        renderTexture.create(resolution.x, resolution.y);


        effect.setUniform("time", fullTime);


        renderTexture.draw(sf::RectangleShape(resolution), &effect);

        window.clear();
        window.draw(sf::Sprite(renderTexture.getTexture()));
        window.display();
    }
}