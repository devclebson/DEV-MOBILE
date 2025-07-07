import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av'; // IMPORT CORRETO
import Svg, { Rect } from 'react-native-svg';

const STREAM_URL = 'https://stream.loopert.com/stream/303';

export default function HomeScreen({ navigation }) {
  const navToGallery = () => {
    navigation.navigate('Gallery');
  };

  const soundRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [isBuffering, setIsBuffering] = useState(false);

  const updateStatus = (status) => {
    if (status.isLoaded) {
      setIsBuffering(status.isBuffering);
      setDuration(status.durationMillis || 0);
      setPosition(status.positionMillis || 0);
    }
  };

  const setupAudio = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri: STREAM_URL },
        { shouldPlay: true, volume },
        updateStatus
      );
      soundRef.current = sound;
      setIsPlaying(true);
    } catch (err) {
      console.error('Erro ao iniciar áudio:', err);
    }
  };

  const togglePlayPause = async () => {
    if (!soundRef.current) {
      await setupAudio();
    } else {
      const status = await soundRef.current.getStatusAsync();
      if (status.isPlaying) {
        await soundRef.current.pauseAsync();
        setIsPlaying(false);
      } else {
        await soundRef.current.playAsync();
        setIsPlaying(true);
      }
    }
  };

  const changeVolume = async (value) => {
    setVolume(value);
    if (soundRef.current) {
      await soundRef.current.setVolumeAsync(value);
    }
  };

  useEffect(() => {
    let interval;
    if (soundRef.current && isPlaying) {
      interval = setInterval(async () => {
        const status = await soundRef.current.getStatusAsync();
        updateStatus(status);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text>Home works!</Text>
      <Button title="Go to Gallery" onPress={navToGallery} />

      <View style={styles.container}>
        <Text style={styles.title}>🎧 Player de Áudio (Streaming)</Text>

        {/* Spotify-style waveform */}
        <Svg height="60" width="100%">
          {[...Array(60)].map((_, i) => (
            <Rect
              key={i}
              x={i * 6}
              y={Math.random() * 30}
              width={4}
              height={Math.random() * 30 + 10}
              fill={isPlaying ? '#32CD32' : '#ccc'}
            />
          ))}
        </Svg>

        <Text style={{ marginTop: 10 }}>
          {isBuffering ? '🔄 Buffering...' : '✅ Pronto'}
        </Text>

        <Button
          title={isPlaying ? '⏸️ Pausar' : '▶️ Tocar'}
          onPress={togglePlayPause}
        />

        <View style={styles.volumeContainer}>
          <Text>🔉 Volume</Text>
          <Slider
            style={{ width: 200 }}
            minimumValue={0}
            maximumValue={1}
            value={volume}
            onValueChange={changeVolume}
          />
        </View>

        <Text style={styles.timer}>
          ⏱ {formatTime(position)} / {duration ? formatTime(duration) : 'Streaming...'}
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  volumeContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  timer: {
    marginTop: 10,
    fontSize: 16,
  },
});
