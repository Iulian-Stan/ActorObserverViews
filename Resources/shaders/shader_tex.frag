﻿#version 330

out vec4 outputColor;

in vec2 texCoord;

uniform sampler2D tex;

void main()
{
    outputColor = texture(tex, texCoord);
}